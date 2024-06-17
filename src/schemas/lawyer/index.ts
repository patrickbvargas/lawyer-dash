import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subjectTypeName } from '@/schemas/subject';

export const lawyerSchema = z.object({
  kind: subjectTypeName.default('Lawyer'),
  id: z.string(),
  oabNumber: z.string(),
  fullName: z.string(),
  remunerationPercent: z.number(),
  role: z.nativeEnum(ENUM.LawyerRole),
  hashedPassword: z.string(),
  slug: z.string(),
  status: z.nativeEnum(ENUM.EntityStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type LawyerSchemaType = z.infer<typeof lawyerSchema>;
