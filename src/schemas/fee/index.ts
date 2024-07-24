import { z } from 'zod';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

export const feeSchema = z.object({
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
});

export const feeSchemaWithSubjectName = feeSchema.transform((fee) =>
  subject('Fee', fee),
);

export type FeeSchemaType = z.infer<typeof feeSchema>;
export type FeeSchemaWithSubjectNameType = z.infer<
  typeof feeSchemaWithSubjectName
>;
