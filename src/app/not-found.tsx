'use client';
import * as React from 'react';
import { PageWrapper, NotFoundFeedback } from '@/components';

export default function NotFound() {
  return (
    <PageWrapper.Root>
      <PageWrapper.Header>
        <PageWrapper.Title title="Oops..." />
      </PageWrapper.Header>
      <PageWrapper.Content>
        <NotFoundFeedback />
      </PageWrapper.Content>
    </PageWrapper.Root>
  );
}
