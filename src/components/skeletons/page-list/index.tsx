import * as React from 'react';
import { PAGE_SIZE_DEFAULT } from '@/constants';
import {
  Skeleton,
  PageWrapper,
  EntityListSkeleton,
  PageTitleSkeleton,
} from '@/components';

interface PageListSkeletonProps {
  totalRecords?: number;
}
export const PageListSkeleton = ({
  totalRecords = PAGE_SIZE_DEFAULT,
}: PageListSkeletonProps) => {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageTitleSkeleton />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Skeleton className="h-10 flex-shrink-0" />
        <PageWrapper.ScrollArea>
          <EntityListSkeleton totalRecords={totalRecords} />
        </PageWrapper.ScrollArea>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
};
