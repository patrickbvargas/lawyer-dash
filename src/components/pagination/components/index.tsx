import * as React from 'react';
import { cn } from '@/utils';
import { Link as LinkPrimitive } from '@/components';
import { buttonVariants } from '@/components/ui/button';
import {
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';

interface RootProps extends React.ComponentProps<'nav'> {}
export const Root = ({ className, ...props }: RootProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('flex w-full items-center gap-4', className)}
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

interface ItemProps extends React.ComponentProps<'li'> {
  isDisabled?: boolean;
}
export const Item = ({
  isDisabled = false,
  className,
  ...props
}: ItemProps) => (
  <li
    className={cn(isDisabled && 'pointer-events-none opacity-50', className)}
    {...props}
  />
);

interface LinkProps extends React.ComponentProps<typeof LinkPrimitive> {
  isActive?: boolean;
}
export const Link = ({
  isActive = false,
  onClick,
  className,
  ...props
}: LinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <LinkPrimitive
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: isActive ? 'secondary' : 'ghost',
          size: 'icon',
        }),
        'transition-none',
        isActive && 'pointer-events-none',
        className,
      )}
      onClick={handleClick}
      {...props}
    />
  );
};

interface FeedbackProps extends React.ComponentProps<'p'> {}
export const Feedback = ({ className, ...props }: FeedbackProps) => (
  <p
    className={cn(
      'truncate text-sm',
      'text-gray-600',
      'dark:text-neutral-300',
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
