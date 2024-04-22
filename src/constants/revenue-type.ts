import { ENUM } from '@/lib/prisma';

type RevenueTypeInfo = {
  value: ENUM.RevenueType;
  alias: string;
};

export const REVENUE_TYPE: Record<ENUM.RevenueType, RevenueTypeInfo> = {
  ADMINISTRATIVE: {
    value: ENUM.RevenueType.ADMINISTRATIVE,
    alias: 'Administrativo',
  },
  JUDICIAL: {
    value: ENUM.RevenueType.JUDICIAL,
    alias: 'Judicial',
  },
  COMPLIANCE: {
    value: ENUM.RevenueType.COMPLIANCE,
    alias: 'Sucumbência',
  },
};
