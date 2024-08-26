import * as React from 'react';
import { cn } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <header
    className={cn(
      'flex flex-col justify-between gap-4 px-2 pb-2 pt-4 sm:flex-row sm:items-center sm:px-8 sm:pb-4 sm:pt-8',
      'border-b-2 border-neutral-800', // TODO: remove border
      className,
    )}
    {...props}
  />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const Title = ({ className, ...props }: TitleProps) => (
  <h1
    className={cn(
      'max-w-full truncate text-2xl font-normal uppercase tracking-wider',
      'text-gray-600',
      'dark:text-neutral-300',
      className,
    )}
    {...props}
  />
);
