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
  SkeletonList,
  Pagination,
} from '@/components';

// TODO: implement error.tsx && loading.tsx
interface LawyerPageProps {
  searchParams?: PageSearchParams;
}
export default async function LawyersPage({ searchParams }: LawyerPageProps) {
  const params = searchParamsSchema.parse(searchParams);
  const count = await getLawyersCount(params.filters);
  const fallbackSize = Math.min(params.pagination.size, count);

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Advogados" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Advogado ou OAB" />
        <PageWrapper.ScrollArea>
          <Suspense fallback={<SkeletonList totalRecords={fallbackSize} />}>
            <Await promise={getLawyers(params)}>
              {(data) => <LawyerList data={data} />}
            </Await>
          </Suspense>
        </PageWrapper.ScrollArea>
      </PageWrapper.Content>
      <PageWrapper.Footer>
        <Pagination totalRecords={count} />
      </PageWrapper.Footer>
    </PageWrapper.Root>
  );
}
