'use client';
import * as React from 'react';
import { HeroIcon } from '@/types';
import { Tooltip } from '@/components';
import * as NavigationPrimitive from './components';
import {
  BanknotesIcon,
  BriefcaseIcon,
  ChartBarIcon,
  InboxStackIcon,
  ScaleIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';

interface NavigationLink {
  href: string;
  label: string;
  Icon: HeroIcon;
}

const links: NavigationLink[] = [
  {
    href: '/dashboard',
    label: 'Dashboard',
    Icon: ChartBarIcon,
  },
  {
    href: '/advogados',
    label: 'Advogados',
    Icon: ScaleIcon,
  },

  {
    href: '/clientes',
    label: 'Clientes',
    Icon: UserIcon,
  },
  {
    href: '/contratos',
    label: 'Contratos',
    Icon: BriefcaseIcon,
  },
  {
    href: '/honorarios',
    label: 'Honorários',
    Icon: InboxStackIcon,
  },

  {
    href: '/remuneracoes',
    label: 'Remunerações',
    Icon: BanknotesIcon,
  },
];

interface NavigationProps
  extends React.ComponentProps<typeof NavigationPrimitive.Root> {}
export const Navigation = ({ ...props }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <NavigationPrimitive.Root {...props}>
      <NavigationPrimitive.List>
        {links.map(({ href, label, Icon }) => (
          <NavigationPrimitive.Item key={label}>
            <Tooltip.Provider delayDuration={500}>
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <NavigationPrimitive.Link
                    href={href}
                    variant={pathname.includes(href) ? 'secondary' : 'ghost'}
                  >
                    <NavigationPrimitive.Icon Icon={Icon} />
                  </NavigationPrimitive.Link>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <NavigationPrimitive.Label label={label} />
                </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
          </NavigationPrimitive.Item>
        ))}
      </NavigationPrimitive.List>
    </NavigationPrimitive.Root>
  );
};
