import * as React from 'react';
import { cn } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div className="flex flex-col items-center gap-2 mt-10" {...props} />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => (
  <h2
    className={cn(
      'text-base text-center font-medium max-w-[40ch]',
      'text-gray-600',
      'dark:text-neutral-300',
      className,
    )}
    {...props}
  >
    {title}
  </h2>
);

interface ControlsProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Controls = ({ className, ...props }: ControlsProps) => (
  <div className={cn('flex justify-center', className)} {...props} />
);
