'use client';
import * as React from 'react';
import { ROUTES } from '@/constants';
import { NavigationMenu } from '@/components';
import { usePathname } from 'next/navigation';

export const Navigation = ({
  ...props
}: React.ComponentProps<typeof NavigationMenu.Root>) => {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <NavigationMenu.Root {...props}>
      <NavigationMenu.List>
        {Object.values(ROUTES).map((route) => (
          <NavigationMenu.Item
            key={route.label}
            active={isActiveRoute(route.href)}
            {...route}
          />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
