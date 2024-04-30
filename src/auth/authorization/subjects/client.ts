import { z } from '@/lib/zod';
import { clientSchema } from '@/schemas';

const clientTypeName = z.literal('Client');
const clientSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([clientTypeName, clientSchema]),
]);

export type ClientSubject = z.infer<typeof clientSubject>;
