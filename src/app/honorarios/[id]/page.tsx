import * as React from 'react';
import { PageParams } from '@/types';
import { getFeeById } from '@/services';
import { pageParamsIdSchema } from '@/schemas';
import {
  PageWrapper,
  Suspense,
  Await,
  FeeDetails,
  PageDetailsSkeleton,
} from '@/components';

interface FeePageProps {
  params?: PageParams;
}
export default async function FeePage({ params }: FeePageProps) {
  const pageParams = pageParamsIdSchema.parse(params);
  const fallbackSize = 3;

  return (
    <Suspense fallback={<PageDetailsSkeleton totalGroups={fallbackSize} />}>
      <Await promise={getFeeById(pageParams.id)}>
        {(fee) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={fee.revenue.contract.identification} />
            </PageWrapper.Header>
            <PageWrapper.Content>
              <PageWrapper.ScrollArea>
                <FeeDetails fee={fee} />
              </PageWrapper.ScrollArea>
            </PageWrapper.Content>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
