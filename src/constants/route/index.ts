import { NavigationLink } from '@/types';
import { ENTITY_NAME } from '@/constants';
import {
  IconScale,
  IconInbox,
  IconBanknote,
  IconUserRound,
  IconBriefcaseBusiness,
  IconChartNoAxesColumnIncreasing,
} from '@/assets/icons';

export const ROUTES: Record<ENTITY_NAME, NavigationLink> = {
  dashboard: {
    href: '/dashboard',
    label: 'Dashboard',
    Icon: IconChartNoAxesColumnIncreasing,
  },
  lawyer: {
    href: '/advogados',
    label: 'Advogados',
    Icon: IconScale,
  },
  client: {
    href: '/clientes',
    label: 'Clientes',
    Icon: IconUserRound,
  },
  contract: {
    href: '/contratos',
    label: 'Contratos',
    Icon: IconBriefcaseBusiness,
  },
  fee: {
    href: '/honorarios',
    label: 'Honorários',
    Icon: IconInbox,
  },
  remuneration: {
    href: '/remuneracoes',
    label: 'Remunerações',
    Icon: IconBanknote,
  },
} as const;
