import { z } from 'zod';
import { ENUM } from '@/constants/enum';
// import { lawyerAssignmentSchema } from '@/schemas/lawyer';
import { subject } from '@casl/ability';

const lawyerAssignmentSchema = z.object({
  lawyerId: z.string(),
  lawyerAssignment: z.nativeEnum(ENUM.LawyerAssignment),
});

export const contractSchema = z.object({
  id: z.string(),
  clientId: z.string(),
  identification: z.string(),
  legalArea: z.nativeEnum(ENUM.ContractLegalArea),
  feePercent: z.number(),
  observation: z.string().nullable(),
  slug: z.string(),
  status: z.nativeEnum(ENUM.EntityStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
  lawyers: z.array(lawyerAssignmentSchema),
});

export const contractSchemaWithSubjectName = contractSchema.transform(
  (contract) => subject('Contract', contract),
);

export type ContractSchemaType = z.infer<typeof contractSchemaWithSubjectName>;
export type ContractSchemaWithSubjectNameType = z.infer<
  typeof contractSchemaWithSubjectName
>;
