import * as React from 'react';
import { cn } from '@/utils';
import { ScrollArea } from '@/components';

export const Root = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('size-full flex flex-col p-4 pt-5 pl-1', className)}
    {...props}
  />
);

export const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'shrink-0 flex justify-between gap-3 p-1 pb-3 sm:pb-4',
      className,
    )}
    {...props}
  />
);

export const Content = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grow flex flex-col gap-1 overflow-hidden', className)}
    {...props}
  />
);

export const ContentScrollable = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <ScrollArea.Root>
    <div
      className={cn('grow flex flex-col gap-1 overflow-hidden p-1', className)}
      {...props}
    />
  </ScrollArea.Root>
);

export const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('shrink-0 flex justify-between gap-3 p-1', className)}
    {...props}
  />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => (
  <h1
    className={cn(
      'max-w-full text-xl sm:text-2xl font-normal uppercase tracking-wider text-foreground sm:truncate',
      className,
    )}
    {...props}
  >
    {title}
  </h1>
);
