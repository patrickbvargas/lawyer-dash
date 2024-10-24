'use client';
import * as React from 'react';
import { PageWrapper, PageErrorFeedback } from '@/components';

interface ErrorProps {
  reset: () => void;
}
export default function Error({ reset }: ErrorProps) {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Oops..." />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <PageErrorFeedback reset={reset} />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
