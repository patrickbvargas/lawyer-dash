import { z } from '@/lib/zod';
import { lawyerSchema } from '@/schemas';

const lawyerTypeName = z.literal('Lawyer');
const lawyerSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('create'),
    z.literal('read'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  z.union([lawyerTypeName, lawyerSchema]),
]);

export type LawyerSubject = z.infer<typeof lawyerSubject>;
