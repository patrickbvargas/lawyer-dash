import * as React from 'react';
import {
  PageWrapper,
  TitleSkeleton,
  EntityDetailsSkeleton,
} from '@/components';

interface PageDetailsSkeletonProps {
  totalGroups?: number;
}
export const PageDetailsSkeleton = ({
  totalGroups = 4,
}: PageDetailsSkeletonProps) => {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <TitleSkeleton />
      </PageWrapper.Header>
      <PageWrapper.ContentScrollable>
        <EntityDetailsSkeleton totalGroups={totalGroups} />
      </PageWrapper.ContentScrollable>
    </PageWrapper.Root>
  );
};
