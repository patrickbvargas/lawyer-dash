import { z } from '@/lib/zod';

export const feeSchema = z.object({
  kind: z.literal('Fee').default('Fee'),
  id: z.string(),
  revenueId: z.string(),
  value: z.number(),
  installmentNumber: z.number(),
  paymentDate: z.date(),
});

export type FeeSchemaType = z.infer<typeof feeSchema>;
