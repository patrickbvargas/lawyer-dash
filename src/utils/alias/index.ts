import { ENUM } from '@/constants';

const LawyerRoleAlias = {
  [ENUM.LawyerRole.ADMIN]: 'Administrador',
  [ENUM.LawyerRole.USER]: 'Usuário',
};

export const getLawyerRoleAlias = (role: ENUM.LawyerRole) => {
  return LawyerRoleAlias[role];
};
