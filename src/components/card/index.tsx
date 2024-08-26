import * as React from 'react';
import { ENUM } from '@/constants/enum';
import { cn, cva, type VariantProps } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = React.forwardRef<HTMLDivElement, RootProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex cursor-pointer flex-col gap-2 rounded-lg border-l-4 border-transparent py-3 pl-3 pr-4 transition duration-300 hover:border-accent',
        'bg-white shadow-sm',
        'dark:bg-neutral-800 dark:shadow-none',
        className,
      )}
      {...props}
    />
  ),
);
Root.displayName = 'Card.Root';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center justify-between', className)}
      {...props}
    />
  ),
);
Header.displayName = 'Card.Header';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'truncate text-base font-medium',
        'text-gray-700',
        'dark:text-neutral-200',
        className,
      )}
      {...props}
    />
  ),
);
Title.displayName = 'Card.Title';

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid grid-cols-1 gap-3.5 px-2 sm:grid-cols-2', className)}
      {...props}
    />
  ),
);
Content.displayName = 'Card.Content';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {}
export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(
        'rounded-full border-t-2',
        'border-gray-100',
        'dark:border-neutral-700',
        className,
      )}
      {...props}
    />
  ),
);
Divider.displayName = 'Card.Divider';

const fieldVariants = cva('truncate text-sm', {
  variants: {
    variant: {
      default: 'font-normal',
      highlight: 'font-semibold',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
});
interface FieldProps
  extends React.HTMLAttributes<HTMLDListElement>,
    VariantProps<typeof fieldVariants> {
  label: string;
  value: string | number | undefined | null;
}
export const Field = React.forwardRef<HTMLDListElement, FieldProps>(
  ({ variant, label, value, className, ...props }, ref) => (
    <dl
      ref={ref}
      className={cn(
        'flex flex-col gap-1',
        'text-gray-500',
        'dark:text-neutral-300',
        className,
      )}
      {...props}
    >
      <dt className="truncate text-xs font-semibold uppercase">{label}</dt>
      <dd className={fieldVariants({ variant })}>{value || ''}</dd>
    </dl>
  ),
);
Field.displayName = 'Card.Field';

const badgeVariants = cva(
  'rounded-md px-2.5 py-1 text-xs font-semibold uppercase text-white place-self-end truncate',
  {
    variants: {
      variant: {
        default: 'bg-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  label: string;
}
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, label, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {label}
    </span>
  ),
);
Badge.displayName = 'Card.Badge';
