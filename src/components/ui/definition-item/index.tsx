import * as React from 'react';
import { cn, cva, type VariantProps } from '@/utils';

const definitionItemVariants = cva('truncate text-sm', {
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

export interface DefinitionItemData
  extends VariantProps<typeof definitionItemVariants> {
  term: string;
  definition: string | number;
}
interface DefinitionItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    DefinitionItemData {}
export const DefinitionItem = ({
  term,
  definition,
  variant,
  className,
  ...props
}: DefinitionItemProps) => (
  <div
    className={cn('flex flex-col gap-1 text-foreground', className)}
    {...props}
  >
    <dt className="truncate text-xs font-semibold uppercase">{term}</dt>
    <dd className={definitionItemVariants({ variant })}>{definition}</dd>
  </div>
);
