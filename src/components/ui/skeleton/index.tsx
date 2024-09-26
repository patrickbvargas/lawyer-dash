import * as React from 'react';
import { cn } from '@/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded size-20',
        'bg-white shadow-sm',
        'dark:bg-neutral-700 dark:shadow-none',
        className,
      )}
      {...props}
    />
  );
};
