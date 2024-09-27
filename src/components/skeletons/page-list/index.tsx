import * as React from 'react';
import { PAGE_SIZE_DEFAULT } from '@/constants';
import { Skeleton, PageWrapper, CardListSkeleton } from '@/components';

export const PageListSkeleton = () => {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <Skeleton className="h-8 max-w-[300px]" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Skeleton className="h-10 flex-shrink-0" />
        <PageWrapper.ScrollArea>
          <CardListSkeleton totalRecords={PAGE_SIZE_DEFAULT} />
        </PageWrapper.ScrollArea>
      </PageWrapper.Content>
      <PageWrapper.Footer className="justify-end">
        <Skeleton className="h-10 max-w-[300px]" />
      </PageWrapper.Footer>
    </PageWrapper.Root>
  );
};
