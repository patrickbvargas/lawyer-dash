import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { contractSchemaWithSubjectName } from '@/schemas';

export async function getContracts() {
  try {
    const data = await prismaDb.contract.findMany({
      include: {
        lawyers: {
          select: {
            lawyerId: true,
            lawyerAssignment: true,
          },
        },
      },
    });
    return z.array(contractSchemaWithSubjectName).parse(data);
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Failed to fetch contract data');
  }
}
