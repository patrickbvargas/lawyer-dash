import * as React from 'react';
import { NavigationLink } from '@/types';
import { buttonVariants } from '@/styles';
import { cn, VariantProps } from '@/utils';
import { Link as LinkPrimitive, Tooltip } from '@/components';

interface RootProps extends React.ComponentProps<'nav'> {}
export const Root = ({ className, ...props }: RootProps) => (
  <nav className={cn('w-full z-10', className)} {...props} />
);

interface ListProps extends React.HTMLAttributes<HTMLUListElement> {}
export const List = ({ className, ...props }: ListProps) => (
  <ul
    className={cn(
      'flex flex-wrap justify-evenly items-center gap-3 sm:flex-col',
      className,
    )}
    {...props}
  />
);

interface ItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    NavigationLink {
  active?: boolean;
}
export const Item = ({
  href,
  label,
  Icon,
  active = false,
  ...props
}: ItemProps) => (
  <Tooltip.Provider delayDuration={500}>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <li {...props}>
          <Link href={href} variant={active ? 'secondary' : 'ghost'}>
            <Icon className="size-6" />
          </Link>
        </li>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <Label label={label} />
      </Tooltip.Content>
    </Tooltip.Root>
  </Tooltip.Provider>
);

interface LinkProps
  extends React.ComponentProps<typeof LinkPrimitive>,
    VariantProps<typeof buttonVariants> {}
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = 'ghost', size = 'icon', className, ...props }, ref) => (
    <LinkPrimitive
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Link.displayName = 'Link';

interface LabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  label: string;
}
const Label = ({ label, className, ...props }: LabelProps) => (
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
