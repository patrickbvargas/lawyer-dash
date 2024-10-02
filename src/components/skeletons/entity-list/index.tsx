import * as React from 'react';
import { EntityList, CardSkeleton } from '@/components';

interface EntityListSkeletonProps {
  totalRecords: number;
}
export const EntityListSkeleton = ({
  totalRecords,
}: EntityListSkeletonProps) => {
  return (
    <EntityList>
      {Array.from({ length: totalRecords }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </EntityList>
  );
};
