import { ENUM } from '@/lib/prisma';

type ContractStatusInfo = {
  value: ENUM.Status;
  alias: string;
};

export const CONTRACT_STATUS: Record<ENUM.Status, ContractStatusInfo> = {
  ACTIVE: {
    value: ENUM.Status.ACTIVE,
    alias: 'Ativo',
  },
  INACTIVE: {
    value: ENUM.Status.INACTIVE,
    alias: 'Inativo',
  },
};
