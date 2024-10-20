'use client';
import * as React from 'react';
import { ROUTES } from '@/constants';
import { usePathname } from 'next/navigation';
import * as NavigationPrimitive from './components';

interface NavigationProps
  extends React.ComponentProps<typeof NavigationPrimitive.Root> {}
export const Navigation = ({ ...props }: NavigationProps) => {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <NavigationPrimitive.Root {...props}>
      <NavigationPrimitive.List>
        {Object.values(ROUTES).map((route) => (
          <NavigationPrimitive.Item
            key={route.href}
            active={isActiveRoute(route.href)}
            {...route}
          />
        ))}
      </NavigationPrimitive.List>
    </NavigationPrimitive.Root>
  );
};
