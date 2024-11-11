import * as React from 'react';
import { cn } from '@/utils';
import { DefinitionItemData } from '@/types';
import { DefinitionItem } from '@/components';

export const Root = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-wrap gap-6 sm:gap-8', className)} {...props} />
);

export const Group = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'min-w-5 max-w-52 w-full flex flex-col gap-6 sm:max-w-64 sm:gap-8',
      className,
    )}
    {...props}
  />
);

interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
  data: DefinitionItemData[];
}
export const DefinitionList = ({
  data,
  className,
  ...props
}: DefinitionListProps) => (
  <dl className={cn('flex flex-col gap-3.5', className)} {...props}>
    {data.map((item) => (
      <DefinitionItem key={item.term} {...item} />
    ))}
  </dl>
);
