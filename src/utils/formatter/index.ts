import { ENUM } from '@/constants';

const LawyerRoleAlias = {
  [ENUM.LawyerRole.ADMIN]: 'Administrador',
  [ENUM.LawyerRole.USER]: 'Usuário',
};

function formatRole(role: ENUM.LawyerRole) {
  return LawyerRoleAlias[role];
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
  return mobilePhone.replace(/(\d{3})(\d{5})(\d{4})/, '($1) $2-$3');
}

function formatPercent(percent: number) {
  return percent.toLocaleString('pt-BR', {
    style: 'percent',
  });
}

export const formatter = {
  percent: formatPercent,
  cpf: formatCPF,
  cnpj: formatCNPJ,
  mobilePhone: formatMobilePhone,
  role: formatRole,
  oab: formatOAB,
};
