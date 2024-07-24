import { z } from 'zod';
import { revenueSchemaWithSubjectName, subjectActionSchema } from '@/schemas';

export const revenueSubjectName = z.literal('Revenue');
const revenueSubject = z.tuple([
  subjectActionSchema,
  z.union([revenueSubjectName, revenueSchemaWithSubjectName]),
]);

export type RevenueSubject = z.TypeOf<typeof revenueSubject>;
