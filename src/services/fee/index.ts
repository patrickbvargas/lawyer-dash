import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { feeSchemaWithSubjectName } from '@/schemas';

export async function getFees() {
  try {
    const data = await prismaDb.fee.findMany({
      include: {
        revenue: {
          select: {
            type: true,
            contract: {
              select: {
                identification: true,
                client: {
                  select: {
                    id: true,
                    fullName: true,
                  },
                },
                lawyers: {
                  select: {
                    lawyerId: true,
                    lawyerAssignment: true,
                    lawyer: {
                      select: {
                        fullName: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    console.log(data[0]);
    return z.array(feeSchemaWithSubjectName).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch fee data.');
  }
}
