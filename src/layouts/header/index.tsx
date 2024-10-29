import * as React from 'react';
import { cn } from '@/utils';
import { Logo } from '@/components';

export const Header = ({
  className,
  ...props
}: React.ComponentProps<'header'>) => (
  <header
    className={cn(
      'sm:flex justify-center items-center gap-8 p-4 hidden',
      className,
    )}
    {...props}
  >
    <Logo />
  </header>
);
