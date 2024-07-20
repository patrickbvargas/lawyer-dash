import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';
import {
  remunerationSchema,
  remunerationTypeName,
} from '@/schemas/remuneration';

const remunerationSubject = z.tuple([
  subjectActionSchema,
  z.union([remunerationTypeName, remunerationSchema]),
]);

export type RemunerationSubject = z.infer<typeof remunerationSubject>;
