import { z } from 'zod';
import { ENUM } from '@/constants/enum';
import { subjectTypeName } from '@/schemas/subject';

const individualClient = z.object({
  id: z.string(),
  clientId: z.string(),
  cpf: z.string(),
  birthdate: z.date(),
  maritalStatus: z.nativeEnum(ENUM.MaritalStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const corporateClient = z.object({
  id: z.string(),
  clientId: z.string(),
  cnpj: z.string(),
  legalName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const clientSchema = z.object({
  kind: subjectTypeName.default('Client'),
  id: z.string(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().nullable(),
  mobilePhone: z.string().nullable(),
  type: z.nativeEnum(ENUM.ClientType),
  slug: z.string(),
  status: z.nativeEnum(ENUM.EntityStatus),
  createdAt: z.date(),
  updatedAt: z.date(),
  individual: individualClient.nullable(),
  corporate: corporateClient.nullable(),
});

export type ClientSchemaType = z.infer<typeof clientSchema>;
