import * as React from 'react';
import { getContracts } from '@/services';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  ContractList,
  EntityListSkeleton,
} from '@/components';

interface ContractsPageProps {
  searchParams?: PageSearchParams;
}
export default async function ContractsPage({
  searchParams,
}: ContractsPageProps) {
  const params = searchParamsSchema.parse(searchParams);
  const fallbackSize = params.pagination.size;

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Contratos" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Processo, Cliente ou Advogado" />
        <Suspense fallback={<EntityListSkeleton totalRecords={fallbackSize} />}>
          <Await promise={getContracts(params)}>
            {({ data, count }) => (
              <ContractList contracts={data} totalRecords={count} />
            )}
          </Await>
        </Suspense>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
