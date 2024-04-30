import { z } from '@/lib/zod';
import { contractSchema } from '@/schemas';

const contractTypeName = z.literal('Contract');
const contractSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([contractTypeName, contractSchema]),
]);

export type ContractSubject = z.infer<typeof contractSubject>;
