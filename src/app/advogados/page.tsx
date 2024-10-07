import * as React from 'react';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import { getLawyers } from '@/services';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  LawyerList,
  EntityListSkeleton,
} from '@/components';

interface LawyerPageProps {
  searchParams?: PageSearchParams;
}
export default async function LawyersPage({ searchParams }: LawyerPageProps) {
  const params = searchParamsSchema.parse(searchParams);

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Advogados" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Advogado ou OAB" />
        <Suspense
          fallback={
            <EntityListSkeleton totalRecords={params.pagination.size} />
          }
        >
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
