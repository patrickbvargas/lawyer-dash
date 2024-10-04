import * as React from 'react';
import { cn } from '@/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
export const SectionTitle = ({
  title,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <div
      className={cn('group inline-flex items-center gap-2.5', className)}
      {...props}
    >
      <span
        className={cn(
          'h-4 w-1 rounded-r-sm transition duration-300 group-hover:bg-accent',
          'bg-gray-300',
          'dark:bg-neutral-600',
        )}
      />
      <h3
        className={cn(
          'truncate text-base font-medium uppercase',
          'text-gray-700',
          'dark:text-neutral-200',
        )}
      >
        {title}
      </h3>
    </div>
  );
};