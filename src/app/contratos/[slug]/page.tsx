import * as React from 'react';
import { PageParams } from '@/types';
import { pageParamsSchema } from '@/schemas';
import { getContractBySlug } from '@/services';
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
  const pageParams = pageParamsSchema.parse(params);

  return (
    <Suspense fallback={<PageDetailsSkeleton totalSections={3} />}>
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
