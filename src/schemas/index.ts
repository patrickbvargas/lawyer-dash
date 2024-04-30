import { feeSchema, FeeSchemaType } from './fee';
import { signInSchema, SignInType } from './auth';
import { clientSchema, ClientSchemaType } from './client';
import { lawyerSchema, LawyerSchemaType } from './lawyer';
import { revenueSchema, RevenueSchemaType } from './revenue';
import { contractSchema, ContractSchemaType } from './contract';
import { remunerationSchema, RemunerationSchemaType } from './remuneration';

export {
  signInSchema,
  lawyerSchema,
  clientSchema,
  contractSchema,
  revenueSchema,
  feeSchema,
  remunerationSchema,
  type SignInType,
  type LawyerSchemaType,
  type ClientSchemaType,
  type ContractSchemaType,
  type RevenueSchemaType,
  type FeeSchemaType,
  type RemunerationSchemaType,
};
