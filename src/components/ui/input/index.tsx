import * as React from 'react';
import { cn } from '@/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'transition duration-300 flex h-10 w-full rounded px-3.5 py-2 ring-1 text-sm font-normal focus:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'bg-white text-gray-500 ring-gray-200 placeholder:text-gray-400 hover:ring-2 hover:ring-gray-200 focus:ring-gray-200 file:text-gray-500',
          'dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700/50 dark:placeholder:text-neutral-500 dark:hover:ring-0 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600 dark:file:text-neutral-300',
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
