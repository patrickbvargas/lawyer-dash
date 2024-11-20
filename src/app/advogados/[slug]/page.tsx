import * as React from 'react';
import { PageParams } from '@/types';
import { getLawyerBySlug } from '@/services';
import { pageParamsSlugSchema } from '@/schemas';
import {
  Await,
  Suspense,
  PageWrapper,
  LawyerDetails,
  PageDetailsSkeleton,
  EntityControls,
} from '@/components';

interface LawyerPageProps {
  params?: PageParams;
}
export default async function LawyerPage({ params }: LawyerPageProps) {
  const pageParams = pageParamsSlugSchema.parse(params);
  const fallbackSize = 2;

  return (
    <Suspense fallback={<PageDetailsSkeleton totalGroups={fallbackSize} />}>
      <Await promise={getLawyerBySlug(pageParams.slug)}>
        {(lawyer) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={lawyer.fullName} />
              <EntityControls />
            </PageWrapper.Header>
            <PageWrapper.ContentScrollable>
              <LawyerDetails lawyer={lawyer} />
            </PageWrapper.ContentScrollable>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
