'use client';
import * as React from 'react';
import { cn } from '@/lib';
import { LucideIcon } from '@/types';
import { ChevronLeft, MoonStar } from '@/assets/icons';
import { Button, Tooltip, NavLink, Logotype } from '@/components';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}
interface SidebarControlProps {
  handleCollapse: () => void;
}
interface SidebarLink {
  label: string;
  href: string;
  Icon: LucideIcon;
}

const links: SidebarLink[] = [
  {
    label: 'Dashboard',
    href: '/',
    Icon: MoonStar,
  },
  {
    label: 'Clientes',
    href: '/clientes',
    Icon: MoonStar,
  },
  {
    label: 'Contratos',
    href: '/contratos',
    Icon: MoonStar,
  },
  {
    label: 'Honorários',
    href: '/honorarios',
    Icon: MoonStar,
  },
  {
    label: 'Remunerações',
    href: '/remuneracoes',
    Icon: MoonStar,
  },
  {
    label: 'Configurações',
    href: '/configuracoes',
    Icon: MoonStar,
  },
];

// TODO: fix - separate server and client components
const Sidebar = ({ className, ...props }: SidebarProps) => {
  const [isCollapse, setIsCollapse] = React.useState(false);

  const handleCollapse = () => {
    setIsCollapse((prev) => !prev);
  };

  return (
    <aside
      data-collapsed={isCollapse}
      className={cn(
        'group/sidebar flex h-full flex-col items-center gap-10 px-4 py-9',
        className
      )}
      {...props}
    >
      <SidebarLogotype />
      <SidebarNavigation />
      <SidebarControl handleCollapse={handleCollapse} />
    </aside>
  );
};

const SidebarLogotype = () => {
  return <Logotype className='group-data-[collapsed=true]/sidebar:hidden' />;
};

const SidebarNavigation = () => {
  return (
    <nav className='w-full flex-1'>
      <ul className='space-y-2'>
        {links.map((link) => (
          <li key={link.label}>
            <SidebarNavigationLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SidebarNavigationLink = ({ href, label, Icon }: SidebarLink) => {
  return (
    <NavLink
      href={href}
      className='group/link flex items-center rounded-medium text-foreground-600 shadow-medium transition-transform-background data-[active=true]:bg-content2 data-[active=true]:text-foreground dark:hover:bg-content2'
    >
      <Tooltip content={label} placement='right'>
        <div className='p-3'>
          <Icon className='h-5 w-5' />
        </div>
      </Tooltip>
      <p className='mr-2 pr-4 group-data-[collapsed=true]/sidebar:hidden'>
        {label}
      </p>
    </NavLink>
  );
};

const SidebarControl = ({ handleCollapse }: SidebarControlProps) => {
  return (
    <Button variant='flat' isIconOnly onClick={handleCollapse}>
      <ChevronLeft className='h-5 w-5 group-data-[collapsed=true]/sidebar:rotate-180' />
    </Button>
  );
};

export { Sidebar };
