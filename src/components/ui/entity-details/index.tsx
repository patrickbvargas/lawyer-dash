import * as React from 'react';
import { cn } from '@/utils';
import { DefinitionItemData } from '@/types';
import { DefinitionItem } from '@/components';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div
    className={cn(
      'grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4',
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
