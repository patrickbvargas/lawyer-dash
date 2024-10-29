import * as React from 'react';
import { PAGE_SIZE_DEFAULT } from '@/constants';
import {
  PageWrapper,
  TitleSkeleton,
  SearchSkeleton,
  EntityListSkeleton,
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
        <TitleSkeleton />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <SearchSkeleton />
        <EntityListSkeleton totalRecords={totalRecords} />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
};
