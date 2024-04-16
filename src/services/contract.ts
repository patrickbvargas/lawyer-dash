import { Prisma, prismaDb } from '@/lib';

export async function getContracts() {
  try {
    return await prismaDb.contract.findMany({
      include: {
        client: true,
        lawyers: {
          include: {
            lawyer: true,
          },
        },
        revenues: true,
      },
    });
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch contract data.');
  }
}

export async function getContractsFiltered(
  page: number,
  limit: number,
  query: string
) {
  try {
    const offset = (page - 1) * limit || 0;
    const filter: Prisma.ContractWhereInput = {
      OR: [
        { identification: { contains: query, mode: 'insensitive' } },
        { client: { fullName: { contains: query, mode: 'insensitive' } } },
        {
          lawyers: {
            some: {
              lawyer: {
                fullName: {
                  contains: query,
                  mode: 'insensitive',
                },
              },
            },
          },
        },
      ],
    };
    const count = await prismaDb.contract.count({
      where: filter,
    });
    const data = await prismaDb.contract.findMany({
      where: filter,
      skip: offset,
      take: limit,
      include: {
        client: true,
        lawyers: {
          include: {
            lawyer: true,
          },
        },
        revenues: true,
      },
    });
    return { data, count };
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch contract data.');
  }
}

export async function getContractById(id: string) {
  try {
    return await prismaDb.contract.findUniqueOrThrow({
      where: { id },
      include: {
        client: true,
        lawyers: true,
        revenues: true,
      },
    });
  } catch (e) {
    console.error(e);
    throw new Error('Failed to fetch contract by id.');
  }
}
