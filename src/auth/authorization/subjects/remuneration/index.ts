import { z } from 'zod';
import {
  remunerationSchemaWithSubjectName,
  subjectActionSchema,
} from '@/schemas';

export const remunerationSubjectName = z.literal('Remuneration');
const remunerationSubject = z.tuple([
  subjectActionSchema,
  z.union([remunerationSubjectName, remunerationSchemaWithSubjectName]),
]);

export type RemunerationSubject = z.infer<typeof remunerationSubject>;
