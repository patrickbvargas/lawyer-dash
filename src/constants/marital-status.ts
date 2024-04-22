import { ENUM } from '@/lib/prisma';

type MaritalStatusInfo = {
  value: ENUM.MaritalStatus;
  alias: string;
};

export const MARITAL_STATUS: Record<ENUM.MaritalStatus, MaritalStatusInfo> = {
  SINGLE: {
    value: ENUM.MaritalStatus.SINGLE,
    alias: 'Solteiro(a)',
  },
  MARRIED: {
    value: ENUM.MaritalStatus.MARRIED,
    alias: 'Casado(a)',
  },
  DIVORCED: {
    value: ENUM.MaritalStatus.DIVORCED,
    alias: 'Divorciado(a)',
  },
  WIDOWED: {
    value: ENUM.MaritalStatus.WIDOWED,
    alias: 'Viúvo(a)',
  },
  OTHER: {
    value: ENUM.MaritalStatus.OTHER,
    alias: 'Outro',
  },
};
