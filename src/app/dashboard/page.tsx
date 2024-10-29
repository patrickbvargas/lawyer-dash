import * as React from 'react';
import { PageWrapper, PageConstructionFeedback } from '@/components';

export default async function DashboardPage() {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Quase lá! " />
      </PageWrapper.Header>
      <PageWrapper.ContentScrollable>
        <PageConstructionFeedback />
      </PageWrapper.ContentScrollable>
    </PageWrapper.Root>
  );
}
