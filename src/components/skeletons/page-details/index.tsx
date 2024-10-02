import * as React from 'react';
import {
  PageWrapper,
  EntityDetailsSkeleton,
  PageTitleSkeleton,
} from '@/components';

interface PageDetailsSkeletonProps {
  totalSections?: number;
}
export const PageDetailsSkeleton = ({
  totalSections = 3,
}: PageDetailsSkeletonProps) => {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageTitleSkeleton />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <EntityDetailsSkeleton totalSections={totalSections} />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
};
