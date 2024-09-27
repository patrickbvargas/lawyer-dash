import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { cn } from '@/utils';

interface RootProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {}
export const Root = ({ className, children, ...props }: RootProps) => (
  <ScrollAreaPrimitive.Root
    className={cn('overflow-hidden', className)}
    {...props}
  >
    {children}
    <ScrollBar />
  </ScrollAreaPrimitive.Root>
);

interface Viewport
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport> {}
export const Viewport = ({ className, ...props }: Viewport) => (
  <ScrollAreaPrimitive.Viewport
    className={cn('h-full w-full', className)}
    {...props}
  />
);

interface ScrollBar
  extends React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > {}
const ScrollBar = ({ className, ...props }: ScrollBar) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    className={cn('flex h-full w-2.5 touch-none select-none', className)}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        'flex-1 rounded-full',
        'bg-gray-200',
        'dark:bg-neutral-700',
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);
