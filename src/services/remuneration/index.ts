import { prismaDb } from '@/lib/prisma';

export async function getRemunerations() {
  try {
    return await prismaDb.remuneration.findMany({
      include: {
        fee: {
          include: {
            revenue: {
              include: {
                contract: {
                  include: {
                    lawyers: true,
                  },
                },
              },
            },
          },
        },
        lawyer: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch remuneration data.');
  }
}

export async function getRemunerationById(id: string) {
  try {
    return await prismaDb.remuneration.findUniqueOrThrow({
      where: { id },
      include: {
        fee: true,
        lawyer: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch remuneration by id.');
  }
}
