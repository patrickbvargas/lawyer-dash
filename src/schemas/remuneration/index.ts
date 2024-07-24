import { z } from 'zod';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

export const remunerationSchema = z.object({
  id: z.string(),
  feeId: z.string(),
  contractLawyerId: z.string(),
  remunerationPercent: z.number(),
  value: z.number(),
  paymentDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
  contractLawyer: lawyerAssignmentSchema,
});

export const remunerationSchemaWithSubjectName = remunerationSchema.transform(
  (remuneration) => subject('Remuneration', remuneration),
);

export type RemunerationSchemaType = z.infer<typeof remunerationSchema>;
export type RemunerationSchemaWithSubjectNameType = z.infer<
  typeof remunerationSchemaWithSubjectName
>;
