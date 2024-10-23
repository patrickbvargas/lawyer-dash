import * as React from 'react';
import { cn } from '@/utils';
import { Logo } from '@/components';

interface HeaderProps extends React.ComponentProps<'header'> {}
export const Header = ({ className, ...props }: HeaderProps) => (
  <header
    className={cn('flex justify-center items-center gap-8 p-4', className)}
    {...props}
  >
    <Logo />
  </header>
);
