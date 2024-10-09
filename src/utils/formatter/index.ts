export function getPercentLocaleString(percent: number) {
  return percent.toLocaleString('pt-BR', {
    style: 'percent',
  });
}

function getCPFLocaleString(cpf: string) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function getCNPJLocaleString(cnpj: string) {
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
}

function getMobilePhoneLocaleString(mobilePhone: string) {
  return mobilePhone.replace(/(\d{3})(\d{5})(\d{4})/, '($1) $2-$3');
}

export const formatter = {
  percent: getPercentLocaleString,
  cpf: getCPFLocaleString,
  cnpj: getCNPJLocaleString,
  mobilePhone: getMobilePhoneLocaleString,
};
