import { z } from '@/lib/zod';
import { revenueSchema } from '@/schemas';

const revenueTypeName = z.literal('Revenue');
const revenueSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([revenueTypeName, revenueSchema]),
]);

export type RevenueSubject = z.infer<typeof revenueSubject>;
