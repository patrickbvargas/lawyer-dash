import * as React from 'react';
import { Skeleton, EntityDetails } from '@/components';

interface EntityDetailsSkeletonProps {
  totalSections: number;
}
export const EntityDetailsSkeleton = ({
  totalSections,
}: EntityDetailsSkeletonProps) => {
  return (
    <EntityDetails.Root>
      {Array.from({ length: totalSections }).map((_, index) => (
        <EntityDetailsSectionSkeleton key={index} />
      ))}
    </EntityDetails.Root>
  );
};

const EntityDetailsSectionSkeleton = () => {
  return (
    <EntityDetails.Section>
      <Skeleton className="h-6 w-3/4" />
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="flex flex-col gap-3.5 pl-3.5 w-3/5" key={index}>
          <div className="flex flex-col gap-1">
            <Skeleton className="h-4" />
            <Skeleton className="h-5 w-3/6" />
          </div>
        </div>
      ))}
    </EntityDetails.Section>
  );
};
