import { Prisma, prismaDb } from '@/lib/prisma';

export async function getClients() {
  try {
    return await prismaDb.client.findMany({
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

export async function getClientsFiltered(
  page: number,
  limit: number,
  query: string
) {
  try {
    const offset = (page - 1) * limit || 0;
    const filter: Prisma.ClientWhereInput = {
      OR: [
        { fullName: { contains: query, mode: 'insensitive' } },
        { corporate: { cnpj: { contains: query, mode: 'insensitive' } } },
        { individual: { cpf: { contains: query, mode: 'insensitive' } } },
      ],
    };

    const count = await prismaDb.client.count({
      where: filter,
    });
    const data = await prismaDb.client.findMany({
      where: filter,
      skip: offset,
      take: limit,
      include: {
        corporate: true,
        individual: true,
        constracts: true,
      },
    });
    return { data, count };
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch client data.');
  }
}

export async function getClientById(id: string) {
  try {
    return await prismaDb.client.findUniqueOrThrow({
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
