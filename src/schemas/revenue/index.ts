import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subjectTypeName } from '@/schemas/subject';

export const revenueSchema = z.object({
  kind: subjectTypeName.default('Revenue'),
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
});

export type RevenueSchemaType = z.infer<typeof revenueSchema>;
