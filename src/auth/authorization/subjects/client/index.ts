import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';
import { clientSchema, clientTypeName } from '@/schemas/client';

const clientSubject = z.tuple([
  subjectActionSchema,
  z.union([clientTypeName, clientSchema]),
]);

export type ClientSubject = z.infer<typeof clientSubject>;
