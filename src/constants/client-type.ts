import { ENUM } from '@/lib/prisma';

type ClientTypeInfo = {
  value: ENUM.ClientType;
  alias: string;
};

export const CLIENT_TYPE: Record<ENUM.ClientType, ClientTypeInfo> = {
  INDIVIDUAL: {
    value: ENUM.ClientType.INDIVIDUAL,
    alias: 'PF',
  },
  CORPORATE: {
    value: ENUM.ClientType.CORPORATE,
    alias: 'PJ',
  },
};
