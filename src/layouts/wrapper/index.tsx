import * as React from 'react';
import { cn } from '@/utils';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Wrapper = ({ className, ...props }: WrapperProps) => (
  <div
    className={cn(
      'h-screen max-w-[80rem] mx-auto overflow-hidden place-self-center',
      'bg-gray-50',
      'dark:bg-neutral-900',
      className,
    )}
    {...props}
  />
);
