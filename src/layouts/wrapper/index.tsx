import * as React from 'react';
import { cn } from '@/utils';

export const Wrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'h-screen max-w-[80rem] mx-auto overflow-hidden place-self-center bg-background',
      className,
    )}
    {...props}
  />
);
