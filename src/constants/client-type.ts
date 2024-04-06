import { $Enums as ENUM } from '@prisma/client';

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
