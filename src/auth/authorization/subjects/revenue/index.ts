import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';
import { revenueSchema, revenueTypeName } from '@/schemas/revenue';

const revenueSubject = z.tuple([
  subjectActionSchema,
  z.union([revenueTypeName, revenueSchema]),
]);

export type RevenueSubject = z.TypeOf<typeof revenueSubject>;
