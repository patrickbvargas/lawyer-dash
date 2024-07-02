import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subjectTypeName } from '@/schemas/subject';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';

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
  contract: z.object({
    lawyers: z.array(lawyerAssignmentSchema),
  }),
});

export type RevenueSchemaType = z.infer<typeof revenueSchema>;
