import * as React from 'react';
import { PageParams } from '@/types';
import { getLawyerBySlug } from '@/services';
import { pageParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Suspense,
  Await,
  LawyerDetails,
  PageDetailsSkeleton,
} from '@/components';

interface LawyerPageProps {
  params?: PageParams;
}
export default async function LawyerPage({ params }: LawyerPageProps) {
  const pageParams = pageParamsSchema.parse(params);

  return (
    <Suspense fallback={<PageDetailsSkeleton totalSections={3} />}>
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
