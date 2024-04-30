import { z } from '@/lib/zod';
import { ENUM } from '@/lib/prisma';

export const lawyerSchema = z.object({
  kind: z.literal('Lawyer').default('Lawyer'),
  id: z.string(),
  oabNumber: z.string(),
  fullName: z.string(),
  remunerationPercent: z.number(),
  role: z.nativeEnum(ENUM.Role),
  hashedPassword: z.string(),
});

export type LawyerSchemaType = z.infer<typeof lawyerSchema>;
