import * as React from 'react';
import { PageParams } from '@/types';
import { pageParamsIdSchema } from '@/schemas';
import { getRemunerationById } from '@/services';
import {
  PageWrapper,
  Suspense,
  Await,
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

  return (
    <Suspense fallback={<PageDetailsSkeleton totalSections={3} />}>
      <Await promise={getRemunerationById(pageParams.id)}>
        {(remuneration) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title
                title={remuneration.contractLawyer.contract.identification}
              />
            </PageWrapper.Header>
            <PageWrapper.Content>
              <PageWrapper.ScrollArea>
                <RemunerationDetails remuneration={remuneration} />
              </PageWrapper.ScrollArea>
            </PageWrapper.Content>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
