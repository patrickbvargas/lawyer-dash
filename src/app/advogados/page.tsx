import * as React from 'react';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import { getLawyers, getLawyersCount } from '@/services';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  LawyerList,
  EntityListSkeleton,
  Pagination,
} from '@/components';

interface LawyerPageProps {
  searchParams?: PageSearchParams;
}
export default async function LawyersPage({ searchParams }: LawyerPageProps) {
  const params = searchParamsSchema.parse(searchParams);
  const lawyersCount = await getLawyersCount(params.filters);
  const fallbackSize = Math.min(params.pagination.size, lawyersCount);

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Advogados" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Advogado ou OAB" />
        <PageWrapper.ScrollArea>
          <Suspense
            fallback={<EntityListSkeleton totalRecords={fallbackSize} />}
          >
            <Await promise={getLawyers(params)}>
              {(data) => <LawyerList lawyers={data} />}
            </Await>
          </Suspense>
        </PageWrapper.ScrollArea>
      </PageWrapper.Content>
      <PageWrapper.Footer>
        <Pagination totalRecords={lawyersCount} />
      </PageWrapper.Footer>
    </PageWrapper.Root>
  );
}
