import * as React from 'react';
import { cn } from '@/utils';
import { Navigation } from '@/components';

export const Sidebar = ({
  className,
  ...props
}: React.ComponentProps<'aside'>) => (
  <aside
    className={cn('p-2 flex flex-col items-center sm:h-full sm:p-4', className)}
    {...props}
  >
    <Navigation />
  </aside>
);
