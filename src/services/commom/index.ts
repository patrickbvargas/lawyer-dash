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
    // ! Remuneration
    // const data = await prismaDb.remuneration.findMany({
    //   include: {
    //     contractLawyer: {
    //       select: {
    //         lawyerId: true,
    //         lawyerAssignment: true,
    //       },
    //     },
    //   },
    // });
    // return z.array(remunerationSchema).parse(data);
    // ! Fee
    // const data = await prismaDb.fee.findMany({
    //   include: {
    //     revenue: {
    //       select: {
    //         contract: {
    //           select: {
    //             lawyers: {
    //               select: {
    //                 lawyerId: true,
    //                 lawyerAssignment: true,
    //               },
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    // return z.array(feeSchema).parse(data);
    // ! Revenue
    // const data = await prismaDb.revenue.findMany({
    //   include: {
    //     contract: {
    //       select: {
    //         lawyers: {
    //           select: {
    //             lawyerId: true,
    //             lawyerAssignment: true,
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    // return z.array(revenueSchema).parse(data);
    // ! Contract
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
    return z.array(contractSchema).parse(data);
  } catch (e) {
    console.error('Database error:', e);
    throw new Error('Failed to fetch data.');
  }
}

/*
  lawyer: this.id == userId
  client: ??
  contract: some(this.lawyers.lawyerId == userId)
  revenue: some(this.contract.lawyers.lawyerId == userId)
  fee: some(this.revenue.contract.lawyers.lawyerId == userId)
  remuneration: some(this.contractLawyer.lawyerId == userId)
*/
