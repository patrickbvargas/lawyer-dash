import * as React from 'react';
import { cn } from '@/utils';
import { ScrollArea as ScrollAreaPrimitive } from '@/components';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div className={cn('h-full flex flex-col p-6', className)} {...props} />
);

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Header = ({ className, ...props }: HeaderProps) => (
  <div
    className={cn('shrink-0 flex justify-between gap-3 py-4', className)}
    {...props}
  />
);

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <div
    className={cn('grow flex flex-col gap-3 overflow-hidden', className)}
    {...props}
  />
);

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Footer = ({ className, ...props }: FooterProps) => (
  <div
    className={cn('shrink-0 flex justify-between gap-3', className)}
    {...props}
  />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}
export const Title = ({ title, className, ...props }: TitleProps) => (
  <h1
    className={cn(
      'max-w-full text-xl sm:text-2xl font-normal uppercase tracking-wider sm:truncate',
      'text-gray-600',
      'dark:text-neutral-300',
      className,
    )}
    {...props}
  >
    {title}
  </h1>
);

interface ScrollAreaProps
  extends React.ComponentProps<typeof ScrollAreaPrimitive.Root> {}
export const ScrollArea = ({
  className,
  children,
  ...props
}: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root className={cn('grow', className)} {...props}>
    <ScrollAreaPrimitive.Viewport>{children}</ScrollAreaPrimitive.Viewport>
  </ScrollAreaPrimitive.Root>
);
