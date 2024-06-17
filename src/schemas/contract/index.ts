import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subjectTypeName } from '@/schemas/subject';

export const contractSchema = z.object({
  kind: subjectTypeName.default('Contract'),
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
});

export type ContractSchemaType = z.infer<typeof contractSchema>;
