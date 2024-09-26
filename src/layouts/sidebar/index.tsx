import * as React from 'react';
import { cn } from '@/utils';

interface SidebarProps extends React.ComponentProps<'aside'> {}
export const Sidebar = ({ className, ...props }: SidebarProps) => (
  <aside
    className={cn('h-full w-[12.5rem] flex flex-col p-4', className)}
    {...props}
  />
);
