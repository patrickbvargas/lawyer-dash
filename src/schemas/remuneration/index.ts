import { z } from 'zod';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

export const remunerationTypeName = z.literal('Remuneration');
export const remunerationSchema = z
  .object({
    id: z.string(),
    feeId: z.string(),
    contractLawyerId: z.string(),
    remunerationPercent: z.number(),
    value: z.number(),
    paymentDate: z.date(),
    createdAt: z.date(),
    updatedAt: z.date(),
    contractLawyer: lawyerAssignmentSchema,
  })
  .transform((remuneration) =>
    subject(remunerationTypeName.value, remuneration),
  );

export type RemunerationSchemaType = z.infer<typeof remunerationSchema>;
