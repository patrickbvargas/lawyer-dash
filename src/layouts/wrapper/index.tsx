import * as React from 'react';
import { cn } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div
    className={cn(
      'grid h-screen max-w-[80rem] mx-auto grid-cols-layout grid-rows-layout overflow-hidden place-self-center',
      'bg-gray-50',
      'dark:bg-neutral-900',
      className,
    )}
    {...props}
  />
);
