'use client';
import * as React from 'react';
import { ROUTES } from '@/constants';
import { Tooltip } from '@/components';
import { usePathname } from 'next/navigation';
import * as NavigationPrimitive from './components';

interface NavigationProps
  extends React.ComponentProps<typeof NavigationPrimitive.Root> {}
export const Navigation = ({ ...props }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <NavigationPrimitive.Root {...props}>
      <NavigationPrimitive.List>
        {Object.values(ROUTES).map(({ href, label, Icon }) => (
          <NavigationPrimitive.Item key={label}>
            <Tooltip.Provider delayDuration={500}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
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
