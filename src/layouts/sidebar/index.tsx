import * as React from 'react';
import { cn } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <aside
    className={cn(
      'flex h-full w-[12.5rem] flex-col items-center gap-8 px-4 py-9 row-span-full',
      'border-r-2 border-neutral-800', // TODO: remove border
      className,
    )}
    {...props}
  />
);
