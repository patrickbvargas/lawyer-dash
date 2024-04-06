import { prisma } from '@/lib';

export async function getLawyers() {
  try {
    return await prisma.lawyer.findMany({
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

export async function getLawyerById(id: string) {
  try {
    return await prisma.lawyer.findUniqueOrThrow({
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
