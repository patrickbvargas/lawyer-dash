import * as React from 'react';
import { EntityList, CardSkeleton, Skeleton } from '@/components';

interface EntityListSkeletonProps {
  totalRecords: number;
}
export const EntityListSkeleton = ({
  totalRecords,
}: EntityListSkeletonProps) => {
  return (
    <EntityList.Root>
      <EntityList.Content>
        {Array.from({ length: totalRecords }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </EntityList.Content>
      <Skeleton className="h-16 max-w-[430px] flex-shrink-0 place-self-end sm:h-10" />
    </EntityList.Root>
  );
};
