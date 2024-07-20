import { clientSchema, ClientSchemaType } from './client';
import { contractSchema, ContractSchemaType } from './contract';
import { feeSchema, FeeSchemaType } from './fee';
import { lawyerSchema, LawyerSchemaType } from './lawyer';
import { remunerationSchema, RemunerationSchemaType } from './remuneration';
import { revenueSchema, RevenueSchemaType } from './revenue';
import { subjectActionSchema, SubjectActionSchemaType } from './subject';

export {
  lawyerSchema,
  clientSchema,
  contractSchema,
  revenueSchema,
  feeSchema,
  remunerationSchema,
  subjectActionSchema,
};

export type {
  LawyerSchemaType,
  ClientSchemaType,
  ContractSchemaType,
  RevenueSchemaType,
  FeeSchemaType,
  RemunerationSchemaType,
  SubjectActionSchemaType,
};
