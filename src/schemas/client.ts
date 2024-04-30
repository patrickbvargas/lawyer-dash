import { z } from '@/lib/zod';
import { ENUM } from '@/lib/prisma';

export const clientSchema = z.object({
  kind: z.literal('Client').default('Client'),
  id: z.string(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.number(),
  mobilePhone: z.number(),
  type: z.nativeEnum(ENUM.ClientType),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ClientSchemaType = z.infer<typeof clientSchema>;
