import * as React from 'react';
import { cn } from '@/lib';
import { cva, VariantProps } from 'class-variance-authority';

const ButtonVariants = cva(
  'border-transparent transition duration-300 inline-flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg text-sm font-medium focus:outline-none',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-white focus:ring-accent/80 hover:bg-accent/80 disabled:opacity-60',
        ghost:
          'bg-none text-zinc-300 over:bg-zinc-200 focus:ring-zinc-300 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600',
        theme:
          'bg-none hover:bg-zinc-200 focus:ring-zinc-500 dark:hover:bg-zinc-800',
        danger:
          'bg-red-600 hover:bg-red-700 dark:bg-red-700 text-white dark:hover:bg-red-800',
      },
      iconStyle: {
        default: 'px-2 py-1 sm:px-4 sm:py-2',
        onlyIcon: 'p-1 sm:p-2',
        startIcon: 'pl-2 pr-3 py-1 sm:pl-3 sm:pr-4 sm:py-2',
        endIcon: 'pl-3 pr-2 py-1 sm:pl-4 sm:py-2 flex-row-reverse',
      },
    },
    defaultVariants: {
      variant: 'primary',
      iconStyle: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

// TODO: add fowardRef
const Button = ({ variant, iconStyle, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, iconStyle }), className)}
      {...props}
    />
  );
};

export { Button };
