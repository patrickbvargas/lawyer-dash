import * as React from 'react';
import { Skeleton, EntityDetails, Section } from '@/components';

interface EntityDetailsSkeletonProps {
  totalGroups: number;
}
export const EntityDetailsSkeleton = ({
  totalGroups,
}: EntityDetailsSkeletonProps) => {
  return (
    <EntityDetails.Root>
      {Array.from({ length: totalGroups }).map((_, index) => (
        <EntityDetailsGroupSkeleton key={index} />
      ))}
    </EntityDetails.Root>
  );
};

const EntityDetailsGroupSkeleton = () => {
  return (
    <EntityDetails.Group>
      <Section.Root>
        <Skeleton className="h-6 w-3/4" />
        <Section.Content>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex flex-col gap-3.5 pl-3.5 w-3/5" key={index}>
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4" />
                <Skeleton className="h-5 w-3/6" />
              </div>
            </div>
          ))}
        </Section.Content>
      </Section.Root>
    </EntityDetails.Group>
  );
};
