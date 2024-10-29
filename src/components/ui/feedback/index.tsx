import * as React from 'react';
import { cn } from '@/utils';

export const Root = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex flex-col items-center gap-2 mt-10" {...props} />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => (
  <h2
    className={cn(
      'text-base text-center font-medium max-w-[40ch] text-foreground',
      className,
    )}
    {...props}
  >
    {title}
  </h2>
);

export const Controls = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex justify-center', className)} {...props} />
);
