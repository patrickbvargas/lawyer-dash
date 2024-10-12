import { z } from 'zod';
import { unstable_cache } from 'next/cache';
import { prismaDb, Prisma } from '@/lib';
import { ENUM, RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS } from '@/constants';
import {
  lawyerSchemaWithSubjectName,
  SearchParamsSchemaType,
  SearchParamsFilterSchemaType,
} from '@/schemas';

const lawyerFields: Prisma.LawyerSelect = {
  id: true,
  oabNumber: true,
  fullName: true,
  remunerationPercent: true,
  role: true,
  hashedPassword: true, // TODO: Remove hashedPassword field
  slug: true,
  status: true,
  createdAt: true,
  updatedAt: true,
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
};

const getLawyersFilter = (params: SearchParamsFilterSchemaType) => {
  const filter: Prisma.LawyerWhereInput = {
    OR: [
      { fullName: { contains: params.query, mode: 'insensitive' } },
      { oabNumber: { contains: params.query, mode: 'insensitive' } },
    ],
  };
  return filter;
};

export const isLawyerResponsibleForContract = (
  lawyerAssignment: ENUM.LawyerAssignment,
) => {
  return RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS.some(
    (assignment) => assignment === lawyerAssignment,
  );
};

export const getLawyers = unstable_cache(
  async ({ pagination, filters }: SearchParamsSchemaType) => {
    try {
      const offset = (pagination.page - 1) * pagination.size || 0;
      const filter = getLawyersFilter(filters);
      const count = await prismaDb.lawyer.count({
        where: filter,
      });
      const data = await prismaDb.lawyer.findMany({
        where: filter,
        skip: offset,
        take: pagination.size,
        orderBy: { fullName: 'asc' },
        select: lawyerFields,
      });
      return { data: z.array(lawyerSchemaWithSubjectName).parse(data), count };
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
      select: lawyerFields,
    });
    return lawyerSchemaWithSubjectName.parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch lawyer data.');
  }
});
