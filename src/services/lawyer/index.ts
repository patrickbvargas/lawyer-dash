import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { lawyerSchemaWithSubjectName } from '@/schemas/lawyer';

export async function getLawyers() {
  try {
    const data = await prismaDb.lawyer.findMany();
    return z.array(lawyerSchemaWithSubjectName).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch lawyer data.');
  }
}
