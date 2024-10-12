import { z } from 'zod';
import { subject } from '@casl/ability';
import { revenueSchema } from '@/schemas/revenue';
import { contractSchema } from '@/schemas/contract';

const contractAppendSchema = contractSchema.omit({ revenues: true });

const revenueAppendSchema = revenueSchema.extend({
  contract: contractAppendSchema,
});

export const feeSchema = z.object({
  id: z.string(),
  revenueId: z.string(),
  value: z.number(),
  installmentNumber: z.number(),
  paymentDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  revenue: revenueAppendSchema,
});

export const feeSchemaWithSubjectName = feeSchema.transform((fee) =>
  subject('Fee', fee),
);

export type FeeSchemaType = z.infer<typeof feeSchema>;
export type FeeSchemaWithSubjectNameType = z.infer<
  typeof feeSchemaWithSubjectName
>;
