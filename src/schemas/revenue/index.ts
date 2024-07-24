import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

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
  contract: z.object({
    lawyers: z.array(lawyerAssignmentSchema),
  }),
});

export const revenueSchemaWithSubjectName = revenueSchema.transform((revenue) =>
  subject('Revenue', revenue),
);

export type RevenueSchemaType = z.infer<typeof revenueSchema>;
export type RevenueSchemaWithSubjectNameType = z.infer<
  typeof revenueSchemaWithSubjectName
>;
