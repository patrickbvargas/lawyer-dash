import { prisma } from '@/lib';

export async function getRevenues() {
  try {
    return await prisma.revenue.findMany({
      include: {
        contract: true,
        fees: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function getRevenueById(id: string) {
  try {
    return await prisma.revenue.findUniqueOrThrow({
      where: { id },
      include: {
        contract: true,
        fees: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch revenue by id.');
  }
}
