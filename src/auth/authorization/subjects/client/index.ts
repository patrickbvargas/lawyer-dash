import { z } from 'zod';
import { clientSchemaWithSubjectName, subjectActionSchema } from '@/schemas';

export const clientSubjectName = z.literal('Client');
const clientSubject = z.tuple([
  subjectActionSchema,
  z.union([clientSubjectName, clientSchemaWithSubjectName]),
]);

export type ClientSubject = z.infer<typeof clientSubject>;
