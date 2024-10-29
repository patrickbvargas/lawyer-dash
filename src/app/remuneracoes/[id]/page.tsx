import * as React from 'react';
import { PageParams } from '@/types';
import { pageParamsIdSchema } from '@/schemas';
import { getRemunerationById } from '@/services';
import {
  Await,
  Suspense,
  PageWrapper,
  RemunerationDetails,
  PageDetailsSkeleton,
} from '@/components';

interface RemunerationPageProps {
  params?: PageParams;
}
export default async function RemunerationPage({
  params,
}: RemunerationPageProps) {
  const pageParams = pageParamsIdSchema.parse(params);
  const fallbackSize = 3;

  return (
    <Suspense fallback={<PageDetailsSkeleton totalGroups={fallbackSize} />}>
      <Await promise={getRemunerationById(pageParams.id)}>
        {(remuneration) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title
                title={remuneration.contractLawyer.contract.identification}
              />
            </PageWrapper.Header>
            <PageWrapper.ContentScrollable>
              <RemunerationDetails remuneration={remuneration} />
            </PageWrapper.ContentScrollable>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
