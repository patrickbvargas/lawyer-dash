import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { remunerationSchemaWithSubjectName } from '@/schemas';

export async function getRemunerations() {
  try {
    const data = await prismaDb.remuneration.findMany({
      include: {
        contractLawyer: {
          select: {
            lawyerId: true,
            lawyerAssignment: true,
          },
        },
      },
    });
    return z.array(remunerationSchemaWithSubjectName).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch remuneration data.');
  }
}
