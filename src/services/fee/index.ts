import { z } from 'zod';
import { prismaDb, Prisma } from '@/lib';
import { unstable_cache } from 'next/cache';
import {
  feeSchemaWithSubjectName,
  SearchParamsSchemaType,
  SearchParamsFilterSchemaType,
} from '@/schemas';

const feeFields: Prisma.FeeSelect = {
  id: true,
  revenueId: true,
  value: true,
  installmentNumber: true,
  paymentDate: true,
  createdAt: true,
  updatedAt: true,
  revenue: {
    include: {
      contract: {
        include: {
          client: {
            include: {
              corporate: true,
              individual: true,
            },
          },
          lawyers: {
            include: {
              lawyer: true,
            },
          },
        },
      },
    },
  },
};

const getFeesFilter = (params: SearchParamsFilterSchemaType) => {
  const filter: Prisma.FeeWhereInput = {
    OR: [
      {
        revenue: {
          contract: {
            client: {
              fullName: { contains: params.query, mode: 'insensitive' },
            },
          },
        },
      },
      {
        revenue: {
          contract: {
            identification: { contains: params.query, mode: 'insensitive' },
          },
        },
      },
    ],
  };
  return filter;
};

export const getFees = unstable_cache(
  async ({ pagination, filters }: SearchParamsSchemaType) => {
    try {
      const offset = (pagination.page - 1) * pagination.size || 0;
      const filter = getFeesFilter(filters);
      const count = await prismaDb.fee.count({
        where: filter,
      });
      const data = await prismaDb.fee.findMany({
        where: filter,
        skip: offset,
        take: pagination.size,
        orderBy: { paymentDate: 'desc' },
        select: feeFields,
      });
      return { data: z.array(feeSchemaWithSubjectName).parse(data), count };
    } catch (e) {
      console.error('Database error:', e);
      throw new Error('Failed to fetch fee data.');
    }
  },
);

export const getFeeById = unstable_cache(async (id: string) => {
  try {
    const data = await prismaDb.fee.findFirst({
      where: {
        id,
      },
      select: feeFields,
    });
    return feeSchemaWithSubjectName.parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch fee data.');
  }
});
