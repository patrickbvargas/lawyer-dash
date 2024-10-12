import * as React from 'react';
import {
  PageWrapper,
  EntityDetailsSkeleton,
  PageTitleSkeleton,
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
        <PageTitleSkeleton />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <EntityDetailsSkeleton totalGroups={totalGroups} />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
};
