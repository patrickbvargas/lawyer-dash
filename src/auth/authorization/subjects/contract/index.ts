import { z } from 'zod';
import { contractSchemaWithSubjectName, subjectActionSchema } from '@/schemas';

export const contractSubjectName = z.literal('Contract');
const contractSubject = z.tuple([
  subjectActionSchema,
  z.union([contractSubjectName, contractSchemaWithSubjectName]),
]);

export type ContractSubject = z.infer<typeof contractSubject>;
