import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';
import { lawyerSchema, lawyerTypeName } from '@/schemas/lawyer';

const lawyerSubject = z.tuple([
  subjectActionSchema,
  z.union([lawyerTypeName, lawyerSchema]),
]);

export type LawyerSubject = z.infer<typeof lawyerSubject>;
