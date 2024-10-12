import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subject } from '@casl/ability';
import { clientSchema } from '@/schemas/client';
import { revenueSchema } from '@/schemas/revenue';
import { lawyerSchema, lawyerAssignmentSchema } from '@/schemas/lawyer';

const clientAppendSchema = clientSchema.omit({ _count: true });

const lawyerAppendSchema = lawyerSchema.omit({ _count: true });

const revenueAppendSchema = revenueSchema;

const lawyerAssignmentAppendSchema = lawyerAssignmentSchema.extend({
  lawyer: lawyerAppendSchema,
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
  client: clientAppendSchema,
  lawyers: z.array(lawyerAssignmentAppendSchema),
  revenues: z.array(revenueAppendSchema),
});

export const contractSchemaWithSubjectName = contractSchema.transform(
  (contract) => subject('Contract', contract),
);

export type ContractSchemaType = z.infer<typeof contractSchemaWithSubjectName>;
export type ContractSchemaWithSubjectNameType = z.infer<
  typeof contractSchemaWithSubjectName
>;
