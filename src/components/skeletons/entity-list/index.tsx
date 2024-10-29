import * as React from 'react';
import { EntityList, CardSkeleton, PaginationSkeleton } from '@/components';

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
      <EntityList.Footer>
        <PaginationSkeleton />
      </EntityList.Footer>
    </EntityList.Root>
  );
};
