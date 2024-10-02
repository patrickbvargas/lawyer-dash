import { z } from 'zod';
import { ENUM } from '@/constants';
import { prismaDb, Prisma } from '@/lib';
import { unstable_cache } from 'next/cache';
import {
  lawyerSchemaWithSubjectName,
  SearchParamsSchemaType,
  SearchParamsFilterSchemaType,
} from '@/schemas';

const getLawyersFilter = (params: SearchParamsFilterSchemaType) => {
  const filter: Prisma.LawyerWhereInput = {
    OR: [
      { fullName: { contains: params.query, mode: 'insensitive' } },
      { oabNumber: { contains: params.query, mode: 'insensitive' } },
    ],
  };
  return filter;
};

export const getLawyersCount = unstable_cache(
  async (params: SearchParamsFilterSchemaType) => {
    try {
      const filter = getLawyersFilter(params);
      const count = await prismaDb.lawyer.count({
        where: filter,
      });
      return count;
    } catch (e) {
      console.error('Database error:', e);
      throw new Error('Failed to fetch lawyer data.');
    }
  },
);

export const getLawyers = unstable_cache(
  async ({ pagination, filters }: SearchParamsSchemaType) => {
    try {
      const offset = (pagination.page - 1) * pagination.size || 0;
      const filter = getLawyersFilter(filters);
      const data = await prismaDb.lawyer.findMany({
        where: filter,
        skip: offset,
        take: pagination.size,
        orderBy: { fullName: 'asc' },
        include: {
          _count: {
            select: {
              contracts: {
                where: {
                  lawyerAssignment: {
                    in: [
                      ENUM.LawyerAssignment.RESPONSIBLE,
                      ENUM.LawyerAssignment.RECOMMENDED,
                    ],
                  },
                },
              },
            },
          },
        },
      });
      return z.array(lawyerSchemaWithSubjectName).parse(data);
    } catch (e) {
      console.error('Database error:', e);
      throw new Error('Failed to fetch lawyer data.');
    }
  },
);

export const getLawyerBySlug = unstable_cache(async (slug: string) => {
  try {
    const data = await prismaDb.lawyer.findFirst({
      where: {
        slug,
      },
      include: {
        _count: {
          select: {
            contracts: {
              where: {
                lawyerAssignment: {
                  in: [
                    ENUM.LawyerAssignment.RESPONSIBLE,
                    ENUM.LawyerAssignment.RECOMMENDED,
                  ],
                },
              },
            },
          },
        },
      },
    });
    return lawyerSchemaWithSubjectName.parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch lawyer data.');
  }
});
