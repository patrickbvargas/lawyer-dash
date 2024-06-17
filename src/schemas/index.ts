import { lawyerSchema, LawyerSchemaType } from './lawyer';
import { clientSchema, ClientSchemaType } from './client';
import { contractSchema, ContractSchemaType } from './contract';
import { revenueSchema, RevenueSchemaType } from './revenue';
import { feeSchema, FeeSchemaType } from './fee';
import { remunerationSchema, RemunerationSchemaType } from './remuneration';
import { subjectTypeName } from './subject';

export {
  lawyerSchema,
  clientSchema,
  contractSchema,
  revenueSchema,
  feeSchema,
  remunerationSchema,
  subjectTypeName,
};

export type {
  LawyerSchemaType,
  ClientSchemaType,
  ContractSchemaType,
  RevenueSchemaType,
  FeeSchemaType,
  RemunerationSchemaType,
};
