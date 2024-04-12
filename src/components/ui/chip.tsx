import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib';
import {
  LAWYER_ROLE,
  CONTRACT_LEGAL_AREA,
  CLIENT_TYPE,
  REVENUE_TYPE,
  LAWYER_ASSIGNMENT,
} from '@/constants';

const ChipVariants = cva(
  'rounded-md px-2.5 py-1 text-xs font-medium uppercase text-white truncate justify-self-end',
  {
    variants: {
      variant: {
        default:
          'outline outline-1 text-zinc-500 outline-zinc-400 dark:text-zinc-100 dark:outline-zinc-100',
        [LAWYER_ROLE.USER.value]: 'bg-zinc-400 dark:bg-zinc-700/60',
        [LAWYER_ROLE.ADMIN.value]: 'bg-accent dark:bg-accent',
        [CONTRACT_LEGAL_AREA.SOCIAL_SECURITY.value]:
          'bg-sky-500 dark:bg-sky-700/60',
        [CONTRACT_LEGAL_AREA.CIVIL.value]: 'bg-cyan-500 dark:bg-cyan-700/60',
        [CONTRACT_LEGAL_AREA.FAMILY.value]:
          'bg-violet-500 dark:bg-violet-700/60',
        [CONTRACT_LEGAL_AREA.LABOR.value]: 'bg-pink-500 dark:bg-pink-700/60',
        [CONTRACT_LEGAL_AREA.OTHER.value]: 'bg-amber-500 dark:bg-amber-700/60',
        [CLIENT_TYPE.INDIVIDUAL.value]: 'bg-indigo-500 dark:bg-indigo-700/60',
        [CLIENT_TYPE.CORPORATE.value]: 'bg-rose-500 dark:bg-rose-700/60',
        [REVENUE_TYPE.ADMINISTRATIVE.value]:
          'bg-amber-500 dark:bg-amber-700/60',
        [REVENUE_TYPE.JUDICIAL.value]: 'bg-sky-500 dark:bg-sky-700/60',
        [REVENUE_TYPE.COMPLIANCE.value]: 'bg-violet-500 dark:bg-violet-700/60',
        [LAWYER_ASSIGNMENT.RESPONSIBLE.value]: 'bg-sky-500 dark:bg-sky-700/60',
        [LAWYER_ASSIGNMENT.RECOMMENDED.value]:
          'bg-amber-500 dark:bg-amber-700/60',
        [LAWYER_ASSIGNMENT.RECOMMENDING.value]:
          'bg-violet-500 dark:bg-violet-700/60',
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
