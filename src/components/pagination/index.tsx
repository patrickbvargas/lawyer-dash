import * as React from 'react';
import { cn } from '@/utils/cn';
import { Link as LinkPrimitive } from '@/components';
import { buttonVariants } from '@/components/ui/button';
import {
  EllipsisHorizontalIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';

interface RootProps extends React.ComponentProps<'nav'> {}
export const Root = ({ className, ...props }: RootProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('flex w-full', className)}
    {...props}
  />
);

interface ContentProps extends React.ComponentProps<'ul'> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <ul
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
);

interface ItemProps extends React.ComponentProps<'li'> {}
export const Item = ({ ...props }: ItemProps) => <li {...props} />;

interface LinkProps extends React.ComponentProps<typeof LinkPrimitive> {
  isActive?: boolean;
  isDisabled?: boolean;
}
export const Link = ({
  isActive = false,
  isDisabled = false,
  className,
  ...props
}: LinkProps) => (
  <LinkPrimitive
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({ variant: isActive ? 'default' : 'ghost', size: 'icon' }),
      isDisabled && 'pointer-events-none opacity-50',
      className,
    )}
    {...props}
  />
);

interface PreviousProps extends React.ComponentProps<typeof Link> {}
export const Previous = ({ ...props }: PreviousProps) => (
  <Link aria-label="Ir para a página anterior" {...props}>
    <ChevronRightIcon className="size-5 rotate-180" />
  </Link>
);

interface FirstProps extends React.ComponentProps<typeof Link> {}
export const First = ({ ...props }: FirstProps) => (
  <Link aria-label="Ir para a primeira página" {...props}>
    <ChevronDoubleRightIcon className="size-5 rotate-180" />
  </Link>
);

interface NextProps extends React.ComponentProps<typeof Link> {}
export const Next = ({ ...props }: NextProps) => (
  <Link aria-label="Ir para a próxima página" {...props}>
    <ChevronRightIcon className="size-5" />
  </Link>
);

interface LastProps extends React.ComponentProps<typeof Link> {}
export const Last = ({ ...props }: LastProps) => (
  <Link aria-label="Ir para a última página" {...props}>
    <ChevronDoubleRightIcon className="size-5" />
  </Link>
);

interface EllipsisProps extends React.ComponentProps<'span'> {}
export const Ellipsis = ({ className, ...props }: EllipsisProps) => (
  <span
    aria-hidden
    className={cn(
      buttonVariants({ variant: 'ghost', size: 'icon' }),
      'pointer-events-none',
      className,
    )}
    {...props}
  >
    <EllipsisHorizontalIcon className="size-5" />
  </span>
);
