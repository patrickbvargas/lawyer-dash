import { prisma } from '@/lib';

export async function getClients() {
  try {
    return await prisma.client.findMany({
      include: {
        corporate: true,
        individual: true,
        constracts: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch client data.');
  }
}

export async function getClientById(id: string) {
  try {
    return await prisma.client.findUniqueOrThrow({
      where: { id },
      include: {
        corporate: true,
        individual: true,
        constracts: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch client by id.');
  }
}
