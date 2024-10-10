import { z } from 'zod';
import { prismaDb, Prisma } from '@/lib';
import { unstable_cache } from 'next/cache';
import { RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS } from '@/constants';
import {
  contractSchemaWithSubjectName,
  SearchParamsSchemaType,
  SearchParamsFilterSchemaType,
} from '@/schemas';

const contractFields: Prisma.ContractSelect = {
  id: true,
  clientId: true,
  identification: true,
  legalArea: true,
  feePercent: true,
  observation: true,
  slug: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  client: {
    select: {
      id: true,
      fullName: true,
    },
  },
  lawyers: {
    select: {
      lawyerId: true,
      lawyerAssignment: true,
      lawyer: {
        select: {
          fullName: true,
        },
      },
    },
  },
};

const getContractsFilter = (params: SearchParamsFilterSchemaType) => {
  const filter: Prisma.ContractWhereInput = {
    OR: [
      { identification: { contains: params.query, mode: 'insensitive' } },
      { client: { fullName: { contains: params.query, mode: 'insensitive' } } },
      {
        lawyers: {
          some: {
            lawyer: {
              fullName: { contains: params.query, mode: 'insensitive' },
            },
            lawyerAssignment: {
              in: RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS,
            },
          },
        },
      },
    ],
  };
  return filter;
};

export const getContracts = unstable_cache(
  async ({ pagination, filters }: SearchParamsSchemaType) => {
    try {
      const offset = (pagination.page - 1) * pagination.size || 0;
      const filter = getContractsFilter(filters);
      const count = await prismaDb.contract.count({
        where: filter,
      });
      const data = await prismaDb.contract.findMany({
        where: filter,
        skip: offset,
        take: pagination.size,
        orderBy: { identification: 'asc' },
        select: contractFields,
      });
      return {
        data: z.array(contractSchemaWithSubjectName).parse(data),
        count,
      };
    } catch (e) {
      console.error('Database error:', e);
      throw new Error('Failed to fetch contract data.');
    }
  },
);
