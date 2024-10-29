import * as React from 'react';
import { cn } from '@/utils';
import { CardDefinitionItemData } from '@/types';
import { Badge as BadgePrimitive, DefinitionItem } from '@/components';

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg bg-card text-card-foreground shadow-sm border-l-4 border-transparent p-4 pl-3 transition duration-300 hover:border-accent',
      className,
    )}
    {...props}
  />
));
Root.displayName = 'Card';

export const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 pb-3', className)}
    {...props}
  />
));
Header.displayName = 'CardHeader';

export const Title = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-base text-card-foreground font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
Title.displayName = 'CardTitle';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
Description.displayName = 'CardDescription';

export const Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative flex flex-col gap-3.5 pt-3', className)}
    {...props}
  />
));
Content.displayName = 'CardContent';

export const Footer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));
Footer.displayName = 'CardFooter';

interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
  data: CardDefinitionItemData;
}
export const DefinitionList = ({
  data,
  className,
  ...props
}: DefinitionListProps) => (
  <dl
    className={cn('grid grid-cols-1 gap-3.5 sm:grid-cols-2', className)}
    {...props}
  >
    {data.map((item) => (
      <DefinitionItem key={item.term} {...item} />
    ))}
  </dl>
);

interface BadgeProps extends React.ComponentProps<typeof BadgePrimitive> {
  label: string;
}
export const Badge = ({
  label,
  variant = 'accent',
  className,
  ...props
}: BadgeProps) => (
  <BadgePrimitive
    variant={variant}
    className={cn('sm:absolute sm:bottom-0 sm:right-0', className)}
    {...props}
  >
    {label}
  </BadgePrimitive>
);
