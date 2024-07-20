import { z } from 'zod';

export const subjectActionSchema = z.union([
  z.literal('manage'),
  z.literal('create'),
  z.literal('read'),
  z.literal('update'),
  z.literal('delete'),
]);

export type SubjectActionSchemaType = z.infer<typeof subjectActionSchema>;
