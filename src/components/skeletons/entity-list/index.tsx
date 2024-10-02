import * as React from 'react';
import { ListWrapper, CardSkeleton } from '@/components';

interface EntityListSkeletonProps {
  totalRecords: number;
}
export const EntityListSkeleton = ({
  totalRecords,
}: EntityListSkeletonProps) => {
  return (
    <ListWrapper>
      {Array.from({ length: totalRecords }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </ListWrapper>
  );
};
