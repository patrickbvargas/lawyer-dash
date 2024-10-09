import { z } from 'zod';
import { prismaDb, Prisma } from '@/lib';
import { unstable_cache } from 'next/cache';
import {
  clientSchemaWithSubjectName,
  SearchParamsSchemaType,
  SearchParamsFilterSchemaType,
} from '@/schemas';

const clientFields: Prisma.ClientSelect = {
  id: true,
  fullName: true,
  email: true,
  phone: true,
  mobilePhone: true,
  type: true,
  slug: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  individual: true,
  corporate: true,
  _count: {
    select: {
      contracts: true,
    },
  },
};

const getClientsFilter = (params: SearchParamsFilterSchemaType) => {
  const filter: Prisma.ClientWhereInput = {
    OR: [
      { fullName: { contains: params.query, mode: 'insensitive' } },
      { individual: { cpf: { contains: params.query, mode: 'insensitive' } } },
      { corporate: { cnpj: { contains: params.query, mode: 'insensitive' } } },
    ],
  };
  return filter;
};

export const getClients = unstable_cache(
  async ({ pagination, filters }: SearchParamsSchemaType) => {
    try {
      const offset = (pagination.page - 1) * pagination.size || 0;
      const filter = getClientsFilter(filters);
      const count = await prismaDb.client.count({
        where: filter,
      });
      const data = await prismaDb.client.findMany({
        where: filter,
        skip: offset,
        take: pagination.size,
        orderBy: { fullName: 'asc' },
        select: clientFields,
      });
      return { data: z.array(clientSchemaWithSubjectName).parse(data), count };
    } catch (e) {
      console.error('Database error:', e);
      throw new Error('Failed to fetch client data.');
    }
  },
);

export const getClientBySlug = unstable_cache(async (slug: string) => {
  try {
    const data = await prismaDb.client.findFirst({
      where: {
        slug,
      },
      select: clientFields,
    });
    return clientSchemaWithSubjectName.parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch client data.');
  }
});
