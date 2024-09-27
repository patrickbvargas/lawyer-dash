import * as React from 'react';
import { ListWrapper, CardSkeleton } from '@/components';

interface CardListSkeletonProps {
  totalRecords: number;
}
export const CardListSkeleton = async ({
  totalRecords,
}: CardListSkeletonProps) => {
  return (
    <ListWrapper>
      {Array.from({ length: totalRecords }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </ListWrapper>
  );
};
