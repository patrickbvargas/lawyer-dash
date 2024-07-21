import { z } from 'zod';
import { prismaDb } from '@/lib/prisma';
import { clientSchema } from '@/schemas';

export async function getClients() {
  try {
    const data = await prismaDb.client.findMany({
      include: {
        individual: true,
        corporate: true,
      },
    });
    return z.array(clientSchema).parse(data);
  } catch (error) {
    console.log('Database error:', error);
    throw new Error('Failed to fetch client data');
  }
}
