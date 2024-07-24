import { z } from 'zod';
import { lawyerSchemaWithSubjectName, subjectActionSchema } from '@/schemas';

export const lawyerSubjectName = z.literal('Lawyer');
const lawyerSubject = z.tuple([
  subjectActionSchema,
  z.union([lawyerSubjectName, lawyerSchemaWithSubjectName]),
]);

export type LawyerSubject = z.infer<typeof lawyerSubject>;
