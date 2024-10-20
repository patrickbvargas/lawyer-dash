import { NavigationLink } from '@/types';
import { ENTITY_NAME } from '@/constants';
import {
  BanknotesIcon,
  BriefcaseIcon,
  ChartBarIcon,
  InboxStackIcon,
  ScaleIcon,
  UserIcon,
} from '@heroicons/react/20/solid';

export const ROUTES: Record<ENTITY_NAME, NavigationLink> = {
  dashboard: {
    href: '/dashboard',
    label: 'Dashboard',
    Icon: ChartBarIcon,
  },
  lawyer: {
    href: '/advogados',
    label: 'Advogados',
    Icon: ScaleIcon,
  },
  client: {
    href: '/clientes',
    label: 'Clientes',
    Icon: UserIcon,
  },
  contract: {
    href: '/contratos',
    label: 'Contratos',
    Icon: BriefcaseIcon,
  },
  fee: {
    href: '/honorarios',
    label: 'Honorários',
    Icon: InboxStackIcon,
  },
  remuneration: {
    href: '/remuneracoes',
    label: 'Remunerações',
    Icon: BanknotesIcon,
  },
} as const;
