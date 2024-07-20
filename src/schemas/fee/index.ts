import { z } from 'zod';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

export const feeTypeName = z.literal('Fee');
export const feeSchema = z
  .object({
    id: z.string(),
    revenueId: z.string(),
    value: z.number(),
    installmentNumber: z.number(),
    paymentDate: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    revenue: z.object({
      contract: z.object({
        lawyers: z.array(lawyerAssignmentSchema),
      }),
    }),
  })
  .transform((fee) => subject(feeTypeName.value, fee));

export type FeeSchemaType = z.infer<typeof feeSchema>;
