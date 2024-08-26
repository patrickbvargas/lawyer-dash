import * as React from 'react';
import { cn } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <main
    className={cn(
      'flex h-full flex-col gap-5 px-2 py-2 sm:pb-8 sm:pl-4 sm:pr-8 sm:pt-4 overflow-hidden',
      className,
    )}
    {...props}
  />
);
