import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subject } from '@casl/ability';
import { contractSchema } from '@/schemas/contract';

const contractAppendSchema = contractSchema.pick({
  identification: true,
  lawyers: true,
});

export const revenueSchema = z.object({
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
  contract: contractAppendSchema,
});

export const revenueSchemaWithSubjectName = revenueSchema.transform((revenue) =>
  subject('Revenue', revenue),
);

export type RevenueSchemaType = z.infer<typeof revenueSchema>;
export type RevenueSchemaWithSubjectNameType = z.infer<
  typeof revenueSchemaWithSubjectName
>;
