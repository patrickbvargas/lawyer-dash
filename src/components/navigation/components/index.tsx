import * as React from 'react';
import { HeroIcon } from '@/types';
import { cn, VariantProps } from '@/utils';
import { Link as LinkPrimitive } from '@/components';
import { buttonVariants } from '@/components/ui/button';

interface RootProps extends React.ComponentProps<'nav'> {}
export const Root = ({ className, ...props }: RootProps) => (
  <nav className={cn('w-full z-10', className)} {...props} />
);

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}
export const List = ({ className, ...props }: ListProps) => (
  <ul
    className={cn('flex flex-wrap justify-evenly gap-3 sm:flex-col', className)}
    {...props}
  />
);

interface ItemProps extends React.HTMLAttributes<HTMLLIElement> {}
export const Item = ({ ...props }: ItemProps) => <li {...props} />;

interface LinkProps
  extends React.ComponentProps<typeof LinkPrimitive>,
    VariantProps<typeof buttonVariants> {}
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'ghost', size = 'icon', className, ...props }, ref) => (
    <LinkPrimitive
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Link.displayName = 'Link';

interface IconProps {
  Icon: HeroIcon;
}
export const Icon = ({ Icon }: IconProps) => <Icon className="size-6" />;

interface LabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  label: string;
}
export const Label = ({ label, className, ...props }: LabelProps) => (
  <p className={cn('text-sm font-normal', className)} {...props}>
    {label}
  </p>
);

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}
export const Divider = ({ className, ...props }: DividerProps) => (
  <hr
    className={cn(
      'rounded-full border-t-2',
      'border-gray-100',
      'dark:border-neutral-700',
      className,
    )}
    {...props}
  />
);
