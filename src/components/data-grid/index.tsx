import * as React from 'react';
import { cn } from '@/utils';
import { ScrollArea } from '@/components';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div className={cn('flex flex-col h-full space-y-5', className)} {...props} />
);

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Header = ({ className, ...props }: HeaderProps) => (
  <div className={cn('flex justify-between gap-3', className)} {...props} />
);

interface ContentProps
  extends React.ComponentPropsWithoutRef<typeof ScrollArea.Root> {}
export const Content = ({ className, children, ...props }: ContentProps) => (
  <ScrollArea.Root className={className} {...props}>
    <ScrollArea.Viewport>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </ScrollArea.Viewport>
  </ScrollArea.Root>
);
