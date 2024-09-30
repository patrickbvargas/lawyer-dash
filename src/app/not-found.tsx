'use client';
import * as React from 'react';
import { PageWrapper, NotFoundFeedback } from '@/components';

// TODO: change title
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
