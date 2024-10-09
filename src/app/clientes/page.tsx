import * as React from 'react';
import { getClients } from '@/services';
import { PageSearchParams } from '@/types';
import { searchParamsSchema } from '@/schemas';
import {
  PageWrapper,
  Search,
  Suspense,
  Await,
  ClientList,
  EntityListSkeleton,
} from '@/components';

interface ClientsPageProps {
  searchParams?: PageSearchParams;
}
export default async function ClientsPage({ searchParams }: ClientsPageProps) {
  const params = searchParamsSchema.parse(searchParams);

  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Clientes" />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <Search placeholder="Pesquisar por Nome ou CPF/CNPJ" />
        <Suspense
          fallback={
            <EntityListSkeleton totalRecords={params.pagination.size} />
          }
        >
          <Await promise={getClients(params)}>
            {({ data, count }) => (
              <ClientList clients={data} totalRecords={count} />
            )}
          </Await>
        </Suspense>
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
