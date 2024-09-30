import * as React from 'react';
import { Card, Skeleton } from '@/components';

export const CardSkeleton = () => {
  return (
    <Card.Root className="pointer-events-none">
      <Card.Header>
        <Skeleton className="h-6" />
      </Card.Header>
      <Card.Divider className="dark:border-transparent" />
      <Card.Content>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-10 flex flex-col gap-1">
            <Skeleton />
            <Skeleton className="w-2/5" />
          </div>
        ))}
        <Skeleton className="h-5 w-3/5 place-self-end" />
      </Card.Content>
    </Card.Root>
  );
};