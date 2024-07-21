import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { revenueSchema } from '@/schemas';

export async function getRevenues() {
  try {
    const data = await prismaDb.revenue.findMany({
      include: {
        contract: {
          select: {
            lawyers: {
              select: {
                lawyerId: true,
                lawyerAssignment: true,
              },
            },
          },
        },
      },
    });
    return z.array(revenueSchema).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch revenue data.');
  }
}
