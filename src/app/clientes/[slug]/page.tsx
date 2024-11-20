import * as React from 'react';
import { PageParams } from '@/types';
import { getClientBySlug } from '@/services';
import { pageParamsSlugSchema } from '@/schemas';
import {
  Await,
  Suspense,
  PageWrapper,
  ClientDetails,
  PageDetailsSkeleton,
  EntityControls,
} from '@/components';

interface ClientPageProps {
  params?: PageParams;
}
export default async function ClientPage({ params }: ClientPageProps) {
  const pageParams = pageParamsSlugSchema.parse(params);
  const fallbackSize = 3;

  return (
    <Suspense fallback={<PageDetailsSkeleton totalGroups={fallbackSize} />}>
      <Await promise={getClientBySlug(pageParams.slug)}>
        {(client) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={client.fullName} />
              <EntityControls />
            </PageWrapper.Header>
            <PageWrapper.ContentScrollable>
              <ClientDetails client={client} />
            </PageWrapper.ContentScrollable>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
