import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';
import { contractSchema, contractTypeName } from '@/schemas/contract';

const contractSubject = z.tuple([
  subjectActionSchema,
  z.union([contractTypeName, contractSchema]),
]);

export type ContractSubject = z.infer<typeof contractSubject>;
