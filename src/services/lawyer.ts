import { Prisma, prismaDb } from '@/lib';

export async function getLawyers() {
  try {
    return await prismaDb.lawyer.findMany({
      include: {
        contracts: true,
        remunerations: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch lawyer data.');
  }
}

export async function getLawyersFiltered(
  page: number,
  limit: number,
  query: string
) {
  try {
    const offset = (page - 1) * limit || 0;
    const filter: Prisma.LawyerWhereInput = {
      OR: [
        { fullName: { contains: query, mode: 'insensitive' } },
        { oabNumber: { contains: query, mode: 'insensitive' } },
      ],
    };

    const count = await prismaDb.lawyer.count({
      where: filter,
    });
    const data = await prismaDb.lawyer.findMany({
      where: filter,
      skip: offset,
      take: limit,
      include: {
        contracts: true,
        remunerations: true,
      },
    });
    return { data, count };
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch lawyer data.');
  }
}

export async function getLawyerById(id: string) {
  try {
    return await prismaDb.lawyer.findUniqueOrThrow({
      where: { id },
      include: {
        contracts: true,
        remunerations: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch lawyer by id.');
  }
}
