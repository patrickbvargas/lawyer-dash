import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { lawyerSchemaWithSubjectName } from '@/schemas/lawyer';
import { ENUM } from '@/constants/enum';

export async function getLawyers() {
  try {
    const data = await prismaDb.lawyer.findMany({
      include: {
        _count: {
          select: {
            contracts: {
              where: {
                lawyerAssignment: {
                  in: [
                    ENUM.LawyerAssignment.RESPONSIBLE,
                    ENUM.LawyerAssignment.RECOMMENDED,
                  ],
                },
              },
            },
          },
        },
      },
    });
    console.log(data[0]);
    return z.array(lawyerSchemaWithSubjectName).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch lawyer data.');
  }
}
