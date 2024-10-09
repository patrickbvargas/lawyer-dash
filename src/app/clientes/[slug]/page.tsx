import * as React from 'react';
import { PageParams } from '@/types';
import { getClientBySlug } from '@/services';
import { pageParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Suspense,
  Await,
  ClientDetails,
  PageDetailsSkeleton,
} from '@/components';

interface ClientPageProps {
  params?: PageParams;
}
export default async function ClientPage({ params }: ClientPageProps) {
  const pageParams = pageParamsSchema.parse(params);

  return (
    <Suspense fallback={<PageDetailsSkeleton totalSections={3} />}>
      <Await promise={getClientBySlug(pageParams.slug)}>
        {(client) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={client.fullName} />
            </PageWrapper.Header>
            <PageWrapper.Content>
              <PageWrapper.ScrollArea>
                <ClientDetails client={client} />
              </PageWrapper.ScrollArea>
            </PageWrapper.Content>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
