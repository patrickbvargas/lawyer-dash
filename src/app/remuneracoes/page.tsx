import * as React from 'react';
import { PageSearchParams } from '@/types';
import { getRemunerations } from '@/services';
import { searchParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  RemunerationList,
  EntityListSkeleton,
} from '@/components';

interface RemunerationsPageProps {
  searchParams?: PageSearchParams;
}
export default async function RemunerationsPage({
  searchParams,
}: RemunerationsPageProps) {
  const params = searchParamsSchema.parse(searchParams);

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Remunerações" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Contrato ou Advogado" />
        <Suspense
          fallback={
            <EntityListSkeleton totalRecords={params.pagination.size} />
          }
        >
          <Await promise={getRemunerations(params)}>
            {({ data, count }) => (
              <RemunerationList remunerations={data} totalRecords={count} />
            )}
          </Await>
        </Suspense>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
