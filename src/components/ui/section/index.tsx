import * as React from 'react';
import { cn } from '@/utils';

export const Root = ({
  className,
  ...props
}: React.ComponentProps<'section'>) => (
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
          'h-4 w-1 rounded-r-sm transition duration-300 group-hover:bg-accent bg-border',
        )}
      />
      <h3
        className={cn(
          'truncate text-base font-medium uppercase text-foreground',
        )}
      >
        {title}
      </h3>
    </div>
  );
};

export const Content = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('w-full flex flex-col flex-1 gap-4 pl-3.5', className)}
    {...props}
  />
);
