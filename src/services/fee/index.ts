import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { feeSchemaWithSubjectName } from '@/schemas';

export async function getFees() {
  try {
    const data = await prismaDb.fee.findMany({
      include: {
        revenue: {
          select: {
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
        },
      },
    });
    return z.array(feeSchemaWithSubjectName).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch fee data.');
  }
}
