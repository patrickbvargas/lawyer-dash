import * as React from 'react';
import { cn, cva, type VariantProps } from '@/utils';

const badgeVariants = cva(
  'w-fit rounded-md px-2.5 py-1 text-xs font-semibold uppercase text-white truncate',
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
export const Badge = ({ variant, label, className, ...props }: BadgeProps) => (
  <span className={cn(badgeVariants({ variant }), className)} {...props}>
    {label}
  </span>
);
