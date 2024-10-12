import { z } from 'zod';
import { subject } from '@casl/ability';
import { contractSchema } from '@/schemas/contract';
import { lawyerSchema, lawyerAssignmentSchema } from '@/schemas/lawyer';

const contractAppendSchema = lawyerAssignmentSchema.extend({
  lawyer: lawyerSchema.omit({ _count: true }),
  contract: contractSchema.omit({
    revenues: true,
    lawyers: true,
    client: true,
  }),
});

export const remunerationSchema = z.object({
  id: z.string(),
  feeId: z.string(),
  contractLawyerId: z.string(),
  remunerationPercent: z.number(),
  value: z.number(),
  paymentDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  contractLawyer: contractAppendSchema,
});

export const remunerationSchemaWithSubjectName = remunerationSchema.transform(
  (remuneration) => subject('Remuneration', remuneration),
);

export type RemunerationSchemaType = z.infer<typeof remunerationSchema>;
export type RemunerationSchemaWithSubjectNameType = z.infer<
  typeof remunerationSchemaWithSubjectName
>;
