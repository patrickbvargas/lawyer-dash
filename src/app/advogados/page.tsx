import * as React from 'react';
import { getLawyers } from '@/services';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  LawyerList,
  EntityListSkeleton,
} from '@/components';

interface LawyersPageProps {
  searchParams?: PageSearchParams;
}
export default async function LawyersPage({ searchParams }: LawyersPageProps) {
  const params = searchParamsSchema.parse(searchParams);
  const fallbackSize = params.pagination.size;

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Advogados" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Nome ou OAB" />
        <Suspense fallback={<EntityListSkeleton totalRecords={fallbackSize} />}>
          <Await promise={getLawyers(params)}>
            {({ data, count }) => (
              <LawyerList lawyers={data} totalRecords={count} />
            )}
          </Await>
        </Suspense>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
