import * as React from 'react';
import { PageParams } from '@/types';
import { pageParamsSchema } from '@/schemas';
import { getLawyerBySlug } from '@/services';
import {
  PageWrapper,
  Suspense,
  Await,
  LawyerDetails,
  PageDetailsSkeleton,
} from '@/components';

interface LawyerDetailsPage {
  params?: PageParams;
}
export default async function LawyerDetailsPage({ params }: LawyerDetailsPage) {
  const pageParams = pageParamsSchema.parse(params);

  return (
    <Suspense fallback={<PageDetailsSkeleton totalSections={2} />}>
      <Await promise={getLawyerBySlug(pageParams.slug)}>
        {(lawyer) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={lawyer.fullName} />
            </PageWrapper.Header>
            <PageWrapper.Content>
              <PageWrapper.ScrollArea>
                <LawyerDetails lawyer={lawyer} />
              </PageWrapper.ScrollArea>
            </PageWrapper.Content>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
