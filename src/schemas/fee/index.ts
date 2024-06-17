import { z } from 'zod';
import { subjectTypeName } from '@/schemas/subject';

export const feeSchema = z.object({
  kind: subjectTypeName.default('Fee'),
  id: z.string(),
  revenueId: z.string(),
  value: z.number(),
  installmentNumber: z.number(),
  paymentDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type FeeSchemaType = z.infer<typeof feeSchema>;