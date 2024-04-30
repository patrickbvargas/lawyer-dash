import { z } from '@/lib/zod';
import { ENUM } from '@/lib/prisma';

export const revenueSchema = z.object({
  kind: z.literal('Revenue').default('Revenue'),
  id: z.string(),
  contractId: z.string(),
  type: z.nativeEnum(ENUM.RevenueType),
  totalValue: z.number(),
  entryValue: z.number(),
  installmentsTotal: z.number(),
  installmentsPaid: z.number(),
  paymentStartDate: z.date(),
});

export type RevenueSchemaType = z.infer<typeof revenueSchema>;
