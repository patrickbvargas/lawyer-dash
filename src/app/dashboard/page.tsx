import * as React from 'react';
import { PageConstructionFeedback, PageWrapper } from '@/components';

interface DashboardPageProps {}
export default async function DashboardPage({}: DashboardPageProps) {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Quase lá! " />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <PageConstructionFeedback />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
