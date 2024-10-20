import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { buttonVariants } from '@/styles';
import { cn, type VariantProps } from '@/utils';

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
