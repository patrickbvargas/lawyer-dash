import * as React from 'react';
import { cn } from '@/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg size-20 w-full',
        'bg-gray-300 shadow-sm',
        'dark:bg-neutral-700 dark:shadow-none',
        className,
      )}
      aria-hidden="true"
      {...props}
    />
  );
};
