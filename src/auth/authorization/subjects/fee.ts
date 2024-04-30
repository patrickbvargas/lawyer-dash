import { z } from '@/lib/zod';
import { feeSchema } from '@/schemas';

const feeTypeName = z.literal('Fee');
const feeSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([feeTypeName, feeSchema]),
]);

export type FeeSubject = z.infer<typeof feeSubject>;
