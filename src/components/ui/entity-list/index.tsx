import * as React from 'react';
import { cn } from '@/utils';
import { Pagination as PaginationPrimitive, ScrollArea } from '@/components';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div
    className={cn(
      'h-full flex flex-col gap-2 justify-between overflow-hidden',
      className,
    )}
    {...props}
  />
);

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <ScrollArea.Root>
    <ScrollArea.Viewport>
      <div
        className={cn(
          'grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
          className,
        )}
        {...props}
      />
    </ScrollArea.Viewport>
  </ScrollArea.Root>
);

interface PaginationProps
  extends React.ComponentProps<typeof PaginationPrimitive> {}
export const Pagination = ({ ...props }: PaginationProps) => (
  <PaginationPrimitive {...props} />
);
