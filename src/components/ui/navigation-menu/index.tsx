import * as React from 'react';
import { NavigationLink } from '@/types';
import { cn, VariantProps } from '@/utils';
import { buttonVariants } from '@/components/ui/button';
import { Link as LinkPrimitive, Tooltip } from '@/components';

export const Root = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav className={cn('w-full z-10', className)} {...props} />
);

export const List = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={cn(
      'flex flex-wrap gap-1 justify-evenly items-center sm:gap-3 sm:flex-col',
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
            <Icon className="size-5" />
          </Link>
        </li>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">
        <Tooltip.Description>{label}</Tooltip.Description>
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
