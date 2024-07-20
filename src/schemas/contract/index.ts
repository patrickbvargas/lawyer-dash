import { z } from 'zod';
import { subject } from '@casl/ability';
import { ENUM } from '@/constants/enum';
import { lawyerAssignmentSchema } from '@/schemas/lawyer';

export const contractTypeName = z.literal('Contract');
export const contractSchema = z
  .object({
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
  })
  .transform((contract) => subject(contractTypeName.value, contract));

export type ContractSchemaType = z.infer<typeof contractSchema>;
