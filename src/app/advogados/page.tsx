import * as React from 'react';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import { getLawyers, getLawyersCount } from '@/services';
import {
  DataGrid,
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
    <DataGrid.Root>
      <DataGrid.Header>
        <Search placeholder="Pesquisar por Advogado ou OAB" />
      </DataGrid.Header>
      <DataGrid.Content>
        <Suspense fallback={<SkeletonList totalRecords={fallbackSize} />}>
          <Await promise={getLawyers(params)}>
            {(data) => <LawyerList data={data} />}
          </Await>
        </Suspense>
      </DataGrid.Content>
      <DataGrid.Footer>
        <Pagination totalRecords={count} />
      </DataGrid.Footer>
    </DataGrid.Root>
  );
}
