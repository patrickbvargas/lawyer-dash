import { prisma } from '@/lib';

export async function getContracts() {
  try {
    return await prisma.contract.findMany({
      include: {
        client: true,
        lawyers: {
          include: {
            lawyer: true,
          },
        },
        revenues: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch contract data.');
  }
}

export async function getContractsFiltered(page: number, limit: number) {
  try {
    const offset = (page - 1) * limit || 0;
    return await prisma.contract.findMany({
      skip: offset,
      take: limit,
      include: {
        client: true,
        lawyers: {
          include: {
            lawyer: true,
          },
        },
        revenues: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch contract data.');
  }
}

export async function getContractById(id: string) {
  try {
    return await prisma.contract.findUniqueOrThrow({
      where: { id },
      include: {
        client: true,
        lawyers: true,
        revenues: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch contract by id.');
  }
}
