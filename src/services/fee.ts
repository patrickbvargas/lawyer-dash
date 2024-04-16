import { prismaDb } from '@/lib';

export async function getFees() {
  try {
    return await prismaDb.fee.findMany({
      include: {
        revenue: {
          include: {
            contract: {
              include: {
                client: true,
              },
            },
          },
        },
        remunerations: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch fee data.');
  }
}

export async function getFeeById(id: string) {
  try {
    return await prismaDb.fee.findUniqueOrThrow({
      where: { id },
      include: {
        revenue: true,
        remunerations: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch fee by id.');
  }
}
