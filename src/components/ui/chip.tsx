import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';
import { LAWYER_ROLE } from '@/constants';

const ChipVariants = cva(
  'rounded-md px-2.5 py-1 text-xs font-medium uppercase text-white place-self-end truncate',
  {
    variants: {
      variant: {
        default:
          'outline outline-1 text-zinc-500 outline-zinc-400 dark:text-zinc-100 dark:outline-zinc-100',
        [LAWYER_ROLE.USER.value]: 'bg-zinc-400 dark:bg-zinc-700/60',
        [LAWYER_ROLE.ADMIN.value]: 'bg-accent dark:bg-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof ChipVariants> {
  value: string;
}

const Chip = ({ value, variant, className, ...props }: ChipProps) => {
  return (
    <span className={cn(ChipVariants({ variant }), className)} {...props}>
      {value}
    </span>
  );
};

export { Chip };
