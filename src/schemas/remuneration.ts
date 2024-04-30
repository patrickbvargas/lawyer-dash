import { z } from '@/lib/zod';

export const remunerationSchema = z.object({
  kind: z.literal('Remuneration').default('Remuneration'),
  id: z.string(),
  feeId: z.string(),
  lawyerId: z.string(),
  remunerationPercent: z.number(),
  value: z.number(),
  paymentDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type RemunerationSchemaType = z.infer<typeof remunerationSchema>;
