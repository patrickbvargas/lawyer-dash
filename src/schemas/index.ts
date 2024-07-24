import {
  clientSchema,
  clientSchemaWithSubjectName,
  type ClientSchemaType,
  type ClientSchemaWithSubjectNameType,
} from './client';
import {
  contractSchema,
  contractSchemaWithSubjectName,
  type ContractSchemaType,
  type ContractSchemaWithSubjectNameType,
} from './contract';
import {
  feeSchema,
  feeSchemaWithSubjectName,
  type FeeSchemaType,
  type FeeSchemaWithSubjectNameType,
} from './fee';
import {
  lawyerSchema,
  lawyerSchemaWithSubjectName,
  type LawyerSchemaType,
  type LawyerSchemaWithSubjectNameType,
} from './lawyer';
import {
  remunerationSchema,
  remunerationSchemaWithSubjectName,
  type RemunerationSchemaType,
  type RemunerationSchemaWithSubjectNameType,
} from './remuneration';
import {
  revenueSchema,
  revenueSchemaWithSubjectName,
  type RevenueSchemaType,
  type RevenueSchemaWithSubjectNameType,
} from './revenue';
import { subjectActionSchema, type SubjectActionSchemaType } from './subject';

export {
  lawyerSchema,
  lawyerSchemaWithSubjectName,
  clientSchema,
  clientSchemaWithSubjectName,
  contractSchema,
  contractSchemaWithSubjectName,
  revenueSchema,
  revenueSchemaWithSubjectName,
  feeSchema,
  feeSchemaWithSubjectName,
  remunerationSchema,
  remunerationSchemaWithSubjectName,
  subjectActionSchema,
};

export type {
  ClientSchemaType,
  ClientSchemaWithSubjectNameType,
  ContractSchemaType,
  ContractSchemaWithSubjectNameType,
  FeeSchemaType,
  FeeSchemaWithSubjectNameType,
  LawyerSchemaType,
  LawyerSchemaWithSubjectNameType,
  RemunerationSchemaType,
  RemunerationSchemaWithSubjectNameType,
  RevenueSchemaType,
  RevenueSchemaWithSubjectNameType,
  SubjectActionSchemaType,
};
