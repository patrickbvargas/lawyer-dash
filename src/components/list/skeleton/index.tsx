import * as React from 'react';
import { WrapperList, SkeletonCard } from '@/components';

interface SkeletonListProps {
  totalRecords: number;
}
export const SkeletonList = async ({ totalRecords }: SkeletonListProps) => {
  return (
    <WrapperList>
      {Array.from({ length: totalRecords }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </WrapperList>
  );
};
