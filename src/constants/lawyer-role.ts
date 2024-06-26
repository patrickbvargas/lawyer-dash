import { ENUM } from '@/lib/prisma';

type LawyerRoleInfo = {
  value: ENUM.Role;
  alias: string;
};

export const LAWYER_ROLE: Record<ENUM.Role, LawyerRoleInfo> = {
  ADMIN: {
    value: ENUM.Role.ADMIN,
    alias: 'Administrador',
  },
  USER: {
    value: ENUM.Role.USER,
    alias: 'Usuário',
  },
};
