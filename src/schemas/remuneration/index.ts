import { z } from 'zod';
import { subjectTypeName } from '@/schemas/subject';

export const remunerationSchema = z.object({
  kind: subjectTypeName.default('Remuneration'),
  id: z.string(),
  feeId: z.string(),
  contractLawyerId: z.string(),
  remunerationPercent: z.number(),
  value: z.number(),
  paymentDate: z.date(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type RemunerationSchemaType = z.infer<typeof remunerationSchema>;
