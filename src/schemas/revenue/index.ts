import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

export const revenueTypeName = z.literal('Revenue');
export const revenueSchema = z
  .object({
    id: z.string(),
    contractId: z.string(),
    type: z.nativeEnum(ENUM.RevenueType),
    totalValue: z.number(),
    entryValue: z.number(),
    installmentsTotal: z.number(),
    installmentsPaid: z.number(),
    paymentStartDate: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    contract: z.object({
      lawyers: z.array(lawyerAssignmentSchema),
    }),
  })
  .transform((revenue) => subject(revenueTypeName.value, revenue));

export type RevenueSchemaType = z.infer<typeof revenueSchema>;
