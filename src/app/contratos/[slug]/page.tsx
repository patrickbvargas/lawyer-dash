import * as React from 'react';
import { PageParams } from '@/types';
import { getContractBySlug } from '@/services';
import { pageParamsSlugSchema } from '@/schemas';
import {
  PageWrapper,
  Suspense,
  Await,
  ContractDetails,
  PageDetailsSkeleton,
} from '@/components';

interface ContractPageProps {
  params?: PageParams;
}
export default async function ContractPage({ params }: ContractPageProps) {
  const pageParams = pageParamsSlugSchema.parse(params);

  return (
    <Suspense fallback={<PageDetailsSkeleton totalGroups={4} />}>
      <Await promise={getContractBySlug(pageParams.slug)}>
        {(contract) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={contract.identification} />
            </PageWrapper.Header>
            <PageWrapper.Content>
              <PageWrapper.ScrollArea>
                <ContractDetails contract={contract} />
              </PageWrapper.ScrollArea>
            </PageWrapper.Content>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
