import { z } from '@/lib/zod';
import { ENUM } from '@/lib/prisma';

export const contractSchema = z.object({
  kind: z.literal('Contract').default('Contract'),
  id: z.string(),
  clientId: z.string(),
  identification: z.string(),
  legalArea: z.nativeEnum(ENUM.ContractLegalArea),
  feePercent: z.number(),
  observation: z.string().nullable(),
  status: z.nativeEnum(ENUM.Status),
});

export type ContractSchemaType = z.infer<typeof contractSchema>;
