import * as React from 'react';
import { cn } from '@/utils';

interface HeaderProps extends React.ComponentProps<'header'> {}
export const Header = ({ className, ...props }: HeaderProps) => (
  <header
    className={cn(
      'flex justify-between gap-8 p-4',
      'border-b-2 border-neutral-800', // TODO: remove border
      className,
    )}
    {...props}
  />
);
