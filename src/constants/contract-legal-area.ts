import { ENUM } from '@/lib/prisma';

type ContractLegalAreaInfo = {
  value: ENUM.ContractLegalArea;
  alias: string;
};

export const CONTRACT_LEGAL_AREA: Record<
  ENUM.ContractLegalArea,
  ContractLegalAreaInfo
> = {
  SOCIAL_SECURITY: {
    value: ENUM.ContractLegalArea.SOCIAL_SECURITY,
    alias: 'Previdenciário',
  },
  CIVIL: {
    value: ENUM.ContractLegalArea.CIVIL,
    alias: 'Civel',
  },
  FAMILY: {
    value: ENUM.ContractLegalArea.FAMILY,
    alias: 'Família',
  },
  LABOR: {
    value: ENUM.ContractLegalArea.LABOR,
    alias: 'Trabalhista',
  },
  OTHER: {
    value: ENUM.ContractLegalArea.OTHER,
    alias: 'Outros',
  },
};
