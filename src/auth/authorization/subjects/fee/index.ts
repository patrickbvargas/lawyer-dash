import { z } from 'zod';
import { feeSchemaWithSubjectName, subjectActionSchema } from '@/schemas';

export const feeSubjectName = z.literal('Fee');
const feeSubject = z.tuple([
  subjectActionSchema,
  z.union([feeSubjectName, feeSchemaWithSubjectName]),
]);

export type FeeSubject = z.infer<typeof feeSubject>;
