import { ENUM } from '@/constants';

const LawyerRoleAlias = {
  [ENUM.LawyerRole.ADMIN]: 'Administrador',
  [ENUM.LawyerRole.USER]: 'Usuário',
};

const ClientMaritalStatusAlias = {
  [ENUM.MaritalStatus.DIVORCED]: 'Divorciado(a)',
  [ENUM.MaritalStatus.MARRIED]: 'Casado(a)',
  [ENUM.MaritalStatus.SINGLE]: 'Solteiro(a)',
  [ENUM.MaritalStatus.WIDOWED]: 'Viúvo(a)',
  [ENUM.MaritalStatus.OTHER]: 'Outro',
};

const EntityStatusAlias = {
  [ENUM.EntityStatus.ACTIVE]: 'Ativo',
  [ENUM.EntityStatus.INACTIVE]: 'Inativo',
};

const ContractLegalAreaAlias = {
  [ENUM.ContractLegalArea.CIVIL]: 'Cível',
  [ENUM.ContractLegalArea.FAMILY]: 'Família',
  [ENUM.ContractLegalArea.LABOR]: 'Trabalhista',
  [ENUM.ContractLegalArea.SOCIAL_SECURITY]: 'Previdenciário',
  [ENUM.ContractLegalArea.OTHER]: 'Outro',
};

const LawyerAssignmentAlias = {
  [ENUM.LawyerAssignment.RESPONSIBLE]: 'Responsável',
  [ENUM.LawyerAssignment.RECOMMENDED]: 'Indicado',
  [ENUM.LawyerAssignment.RECOMMENDING]: 'Indicante',
  [ENUM.LawyerAssignment.ADITIONAL]: 'Adicional',
};

const RevenueTypeAlias = {
  [ENUM.RevenueType.ADMINISTRATIVE]: 'Administrativo',
  [ENUM.RevenueType.JUDICIAL]: 'Judicial',
  [ENUM.RevenueType.COMPLIANCE]: 'Sucumbência',
};

function formatRole(role: ENUM.LawyerRole) {
  return LawyerRoleAlias[role];
}

function formatMaritalStatus(maritalStatus: ENUM.MaritalStatus) {
  return ClientMaritalStatusAlias[maritalStatus];
}

function formatEntityStatus(status: ENUM.EntityStatus) {
  return EntityStatusAlias[status];
}

function formatContractLegalArea(legalArea: ENUM.ContractLegalArea) {
  return ContractLegalAreaAlias[legalArea];
}

function formatLawyerAssignment(lawyerAssignment: ENUM.LawyerAssignment) {
  return LawyerAssignmentAlias[lawyerAssignment];
}

function formatRevenueType(revenueType: ENUM.RevenueType) {
  return RevenueTypeAlias[revenueType];
}

function formatOAB(oab: string) {
  return oab.replace(/([A-Z]{2})(\d+)/, (_, uf, num) => {
    const formattedNum = num.replace(/^0+/, '');
    return `${uf} ${formattedNum.slice(0, -3)}.${formattedNum.slice(-3)}`;
  });
}

function formatCPF(cpf: string) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatCNPJ(cnpj: string) {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

function formatMobilePhone(mobilePhone: string) {
  return mobilePhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

function formatDate(date: Date | string) {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  return dateObject.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function formatPercent(percent: number) {
  return percent.toLocaleString('pt-BR', {
    style: 'percent',
  });
}

function formatCurrency(currency: number) {
  return currency.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export const formatter = {
  percent: formatPercent,
  currency: formatCurrency,
  date: formatDate,
  cpf: formatCPF,
  cnpj: formatCNPJ,
  mobilePhone: formatMobilePhone,
  oab: formatOAB,
  role: formatRole,
  maritalStatus: formatMaritalStatus,
  status: formatEntityStatus,
  legalArea: formatContractLegalArea,
  lawyerAssignment: formatLawyerAssignment,
  revenueType: formatRevenueType,
};
