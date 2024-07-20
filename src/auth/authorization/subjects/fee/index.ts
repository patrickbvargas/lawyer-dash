import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';
import { feeSchema, feeTypeName } from '@/schemas/fee';

const feeSubject = z.tuple([
  subjectActionSchema,
  z.union([feeTypeName, feeSchema]),
]);

export type FeeSubject = z.infer<typeof feeSubject>;
