import { z } from 'zod';
import { prismaDb, Prisma } from '@/lib';
import { unstable_cache } from 'next/cache';
import {
  remunerationSchemaWithSubjectName,
  SearchParamsSchemaType,
  SearchParamsFilterSchemaType,
} from '@/schemas';

const remunerationFields: Prisma.RemunerationSelect = {
  id: true,
  feeId: true,
  contractLawyerId: true,
  remunerationPercent: true,
  value: true,
  paymentDate: true,
  createdAt: true,
  updatedAt: true,
  contractLawyer: {
    include: {
      contract: true,
      lawyer: true,
    },
  },
};

const getRemunerationsFilter = (params: SearchParamsFilterSchemaType) => {
  const filter: Prisma.RemunerationWhereInput = {
    OR: [
      {
        contractLawyer: {
          contract: {
            identification: { contains: params.query, mode: 'insensitive' },
          },
        },
      },
      {
        contractLawyer: {
          lawyer: {
            fullName: { contains: params.query, mode: 'insensitive' },
          },
        },
      },
    ],
  };
  return filter;
};

export const getRemunerations = unstable_cache(
  async ({ pagination, filters }: SearchParamsSchemaType) => {
    try {
      const offset = (pagination.page - 1) * pagination.size || 0;
      const filter = getRemunerationsFilter(filters);
      const count = await prismaDb.remuneration.count({
        where: filter,
      });
      const data = await prismaDb.remuneration.findMany({
        where: filter,
        skip: offset,
        take: pagination.size,
        orderBy: { paymentDate: 'desc' },
        select: remunerationFields,
      });
      return {
        data: z.array(remunerationSchemaWithSubjectName).parse(data),
        count,
      };
    } catch (e) {
      console.error('Database error:', e);
      throw new Error('Failed to fetch remuneration data.');
    }
  },
);
