import * as React from 'react';
import { cn } from '@/lib';
import { LucideIcon } from '@/types';
import { MoonStar } from '@/assets/icons';
import { NavigationLink } from '@/components';

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {}
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

const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <aside
      data-collapsed={false}
      className={cn(
        'group/sidebar flex h-full flex-col items-center px-4 py-9',
        className
      )}
      {...props}
    >
      <SidebarNavigation />
    </aside>
  );
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
    <NavigationLink href={href} className='group flex items-center'>
      <span
        className={cn(
          'h-6 w-1 rounded-r-sm transition duration-300',
          'group-hover:bg-accent/50 group-data-[active=true]:bg-accent/60',
          'dark:group-hover:bg-accent/40 dark:group-data-[active=true]:bg-accent'
        )}
      />
      <div className='p-2'>
        <Icon className='h-5 w-5' />
      </div>
      <p className='ml-2 group-data-[collapsed=true]/sidebar:hidden'>{label}</p>
    </NavigationLink>
  );
};

export { Sidebar };
