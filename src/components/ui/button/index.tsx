import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn, cva, type VariantProps } from '@/utils';

export const buttonVariants = cva(
  'transition-colors duration-300 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: [
          'bg-accent text-white hover:bg-accent/80 focus-visible:outline-yellow-700',
          'dark:focus-visible:outline-yellow-100',
        ],
        secondary: [
          'bg-white text-gray-500 shadow-sm hover:bg-gray-200',
          'dark:bg-neutral-700 dark:text-neutral-300 dark:shadow-none dark:hover:bg-neutral-600',
        ],
        outline: [
          'border-2',
          'text-gray-600 border-gray-200 hover:bg-gray-200',
          'dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-600',
        ],
        ghost: [
          'bg-none text-gray-600 hover:bg-gray-200',
          'dark:text-neutral-300 dark:hover:bg-neutral-700',
        ],
        destructive: [
          'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-800',
          'dark:bg-red-700 dark:hover:bg-red-900 dark:focus-visible:outline-red-300',
        ],
        clear: [
          'bg-transparent text-gray-500 hover:text-gray-700',
          'dark:text-neutral-400 dark:hover:text-neutral-200',
        ],
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3 py-1.5',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
export const Button = ({
  asChild = false,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};
