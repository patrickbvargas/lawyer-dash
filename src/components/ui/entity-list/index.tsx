import * as React from 'react';
import { cn } from '@/utils';
import { ScrollArea } from '@/components';

export const Root = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('size-full flex flex-col gap-1 overflow-hidden', className)}
    {...props}
  />
);

export const Header = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('shrink-0 flex justify-between gap-3 p-1', className)}
    {...props}
  />
);

export const Content = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <ScrollArea.Root>
    <div
      className={cn(
        'grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        className,
      )}
      {...props}
    />
  </ScrollArea.Root>
);

export const Footer = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('shrink-0 flex justify-end gap-3 p-1', className)}
    {...props}
  />
);
