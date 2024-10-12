import * as React from 'react';
import { cn } from '@/utils';

interface RootProps extends React.ComponentProps<'section'> {}
export const Root = ({ className, ...props }: RootProps) => (
  <section className={cn('flex flex-col flex-1 gap-4', className)} {...props} />
);

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => {
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

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <div
    className={cn('w-full flex flex-col flex-1 gap-4 pl-3.5', className)}
    {...props}
  />
);
