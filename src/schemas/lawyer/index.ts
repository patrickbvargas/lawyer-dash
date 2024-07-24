import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subject } from '@casl/ability';

export const lawyerSchema = z.object({
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

export const lawyerSchemaWithSubjectName = lawyerSchema.transform((lawyer) =>
  subject('Lawyer', lawyer),
);

export const lawyerAssignmentSchema = z.object({
  lawyerId: z.string(),
  lawyerAssignment: z.nativeEnum(ENUM.LawyerAssignment),
});

export type LawyerSchemaType = z.infer<typeof lawyerSchema>;
export type LawyerSchemaWithSubjectNameType = z.infer<
  typeof lawyerSchemaWithSubjectName
>;
