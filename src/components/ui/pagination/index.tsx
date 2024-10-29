import * as React from 'react';
import { cn } from '@/utils';
import { Link as LinkPrimitive } from '@/components';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import {
  IconChevronLeft,
  IconChevronsLeft,
  IconChevronRight,
  IconChevronsRight,
  IconMoreHorizontal,
} from '@/assets/icons';

export const Root = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full items-center justify-center', className)}
    {...props}
  />
);
Root.displayName = 'Pagination';

export const Content = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn('flex flex-row items-center gap-2', className)}
    {...props}
  />
));
Content.displayName = 'PaginationContent';

interface ItemProps extends React.ComponentProps<'li'> {
  isDisabled?: boolean;
}
export const Item = React.forwardRef<HTMLLIElement, ItemProps>(
  ({ isDisabled = false, className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(isDisabled && 'pointer-events-none opacity-50', className)}
      {...props}
    />
  ),
);
Item.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<typeof LinkPrimitive>;
export const Link = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <LinkPrimitive
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? 'secondary' : 'ghost',
        size,
      }),
      className,
    )}
    {...props}
  />
);
Link.displayName = 'PaginationLink';

export const Previous = ({ ...props }: React.ComponentProps<typeof Link>) => (
  <Link aria-label="Ir para a página anterior" {...props}>
    <IconChevronLeft className="size-4" />
  </Link>
);
Previous.displayName = 'PaginationPrevious';

export const First = ({ ...props }: React.ComponentProps<typeof Link>) => (
  <Link aria-label="Ir para a primeira página" {...props}>
    <IconChevronsLeft className="size-4" />
  </Link>
);
First.displayName = 'PaginationFirst';

export const Next = ({ ...props }: React.ComponentProps<typeof Link>) => (
  <Link aria-label="Ir para a próxima página" {...props}>
    <IconChevronRight className="size-4" />
  </Link>
);
Next.displayName = 'PaginationNext';

export const Last = ({ ...props }: React.ComponentProps<typeof Link>) => (
  <Link aria-label="Ir para a última página" {...props}>
    <IconChevronsRight className="size-4" />
  </Link>
);
Last.displayName = 'PaginationLast';

export const Ellipsis = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    aria-hidden
    className={cn('flex size-9 items-center justify-center', className)}
    {...props}
  >
    <IconMoreHorizontal className="size-4" />
    <span className="sr-only">Mais páginas</span>
  </span>
);
Ellipsis.displayName = 'PaginationEllipsis';

export const Feedback = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('truncate text-sm text-foreground', className)} {...props} />
);
Feedback.displayName = 'PaginationFeedback';
