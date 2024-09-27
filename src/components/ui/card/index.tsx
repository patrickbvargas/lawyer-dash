import * as React from 'react';
import { Badge as BadgePrimitive } from '@/components';
import { cn, cva, type VariantProps } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div
    className={cn(
      'flex cursor-pointer flex-col gap-2 rounded-lg border-l-4 border-transparent py-3 pl-3 pr-4 transition duration-300 hover:border-accent',
      'bg-white shadow-sm',
      'dark:bg-neutral-800 dark:shadow-none',
      className,
    )}
    {...props}
  />
);

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Header = ({ className, ...props }: HeaderProps) => (
  <div
    className={cn('flex items-center justify-between', className)}
    {...props}
  />
);

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export const Title = ({ className, ...props }: TitleProps) => (
  <h2
    className={cn(
      'truncate text-base font-medium',
      'text-gray-700',
      'dark:text-neutral-200',
      className,
    )}
    {...props}
  />
);

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <div
    className={cn('grid grid-cols-1 gap-3.5 sm:grid-cols-2', className)}
    {...props}
  />
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
export const Field = ({
  variant,
  label,
  value,
  className,
  ...props
}: FieldProps) => (
  <dl
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
);

interface BadgeProps extends React.ComponentProps<typeof BadgePrimitive> {}
export const Badge = ({ variant, className, ...props }: BadgeProps) => (
  <BadgePrimitive
    className={cn('place-self-end', variant, className)}
    {...props}
  />
);
