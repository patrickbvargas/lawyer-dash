import { z } from '@/lib/zod';
import { remunerationSchema } from '@/schemas';

const remunerationTypeName = z.literal('Remuneration');
const remunerationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([remunerationTypeName, remunerationSchema]),
]);

export type RemunerationSubject = z.infer<typeof remunerationSubject>;
