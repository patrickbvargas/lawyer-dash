import * as React from 'react';
import { cn } from '@/utils';
import { Navigation, UserProfile } from '@/components';

export const Sidebar = ({
  className,
  ...props
}: React.ComponentProps<'aside'>) => (
  <aside
    className={cn(
      'p-2 flex gap-1 items-center justify-between sm:gap-3 sm:flex-col sm:h-full sm:p-4',
      className,
    )}
    {...props}
  >
    <Navigation />
    <UserProfile />
  </aside>
);
