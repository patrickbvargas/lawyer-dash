import * as React from 'react';
import { PageParams } from '@/types';
import { getContractBySlug } from '@/services';
import { pageParamsSlugSchema } from '@/schemas';
import {
  Await,
  Suspense,
  PageWrapper,
  ContractDetails,
  PageDetailsSkeleton,
  EntityControls,
} from '@/components';

interface ContractPageProps {
  params?: PageParams;
}
export default async function ContractPage({ params }: ContractPageProps) {
  const pageParams = pageParamsSlugSchema.parse(params);
  const fallbackSize = 3;

  return (
    <Suspense fallback={<PageDetailsSkeleton totalGroups={fallbackSize} />}>
      <Await promise={getContractBySlug(pageParams.slug)}>
        {(contract) => (
          <PageWrapper.Root>
            <PageWrapper.Header>
              <PageWrapper.Title title={contract.identification} />
              <EntityControls />
            </PageWrapper.Header>
            <PageWrapper.ContentScrollable>
              <ContractDetails contract={contract} />
            </PageWrapper.ContentScrollable>
          </PageWrapper.Root>
        )}
      </Await>
    </Suspense>
  );
}
