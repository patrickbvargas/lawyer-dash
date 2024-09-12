import * as React from 'react';
import { cn, type VariantProps } from '@/utils';
import { formFieldVariants } from '@/styles';

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof formFieldVariants> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          formFieldVariants({ variant }),
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'file:text-gray-500',
          'dark:file:text-neutral-300',
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
