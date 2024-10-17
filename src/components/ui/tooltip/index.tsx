import * as React from 'react';
import { cn } from '@/utils';
import { buttonVariants } from '@/components/ui/button';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export const Provider = TooltipPrimitive.Provider;
export const Root = TooltipPrimitive.Root;
export const Trigger = TooltipPrimitive.Trigger;

interface ContentProps
  extends React.ComponentProps<typeof TooltipPrimitive.Content> {}
export const Content = ({
  className,
  sideOffset = 10,
  side = 'right',
  ...props
}: ContentProps) => (
  <TooltipPrimitive.Content
    className={cn(
      'z-50 overflow-hidden rounded-lg px-3 py-1.5',
      buttonVariants({ variant: 'secondary' }),
      className,
    )}
    sideOffset={sideOffset}
    side={side}
    {...props}
  />
);
