import * as React from 'react';
import { getFees } from '@/services';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  FeeList,
  EntityListSkeleton,
} from '@/components';

interface FeesPageProps {
  searchParams?: PageSearchParams;
}
export default async function FeesPage({ searchParams }: FeesPageProps) {
  const params = searchParamsSchema.parse(searchParams);
  const fallbackSize = params.pagination.size;

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Honorários" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Contrato ou Cliente" />
        <Suspense fallback={<EntityListSkeleton totalRecords={fallbackSize} />}>
          <Await promise={getFees(params)}>
            {({ data, count }) => <FeeList fees={data} totalRecords={count} />}
          </Await>
        </Suspense>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
