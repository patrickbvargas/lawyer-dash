import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import {
  lawyerSchema,
  clientSchema,
  contractSchema,
  revenueSchema,
  feeSchema,
  remunerationSchema,
} from '@/schemas';

export async function getData() {
  try {
    const data = await prismaDb.lawyer.findMany({});
    console.log(data);
    if (!data) return null;
    return z.array(lawyerSchema).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch data.');
  }
}
