import * as React from 'react';
import { cn } from '@/utils';
import { ScrollArea as ScrollAreaPrimitive } from '@/components';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div className={cn('h-full flex flex-col p-4', className)} {...props} />
);

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Header = ({ className, ...props }: HeaderProps) => (
  <div
    className={cn('flex justify-between gap-3 px-2 py-4', className)}
    {...props}
  />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => (
  <h1
    className={cn(
      'max-w-full truncate text-2xl font-normal uppercase tracking-wider',
      'text-gray-600',
      'dark:text-neutral-300',
      className,
    )}
    {...props}
  >
    {title}
  </h1>
);

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <div
    className={cn(
      'flex flex-col flex-grow gap-3 p-2 overflow-hidden',
      className,
    )}
    {...props}
  />
);

interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {}
export const ScrollArea = ({
  className,
  children,
  ...props
}: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root className={cn('flex-grow', className)} {...props}>
    <ScrollAreaPrimitive.Viewport>{children}</ScrollAreaPrimitive.Viewport>
  </ScrollAreaPrimitive.Root>
);

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Footer = ({ className, ...props }: FooterProps) => (
  <div className={cn('flex justify-between gap-3 p-2', className)} {...props} />
);
