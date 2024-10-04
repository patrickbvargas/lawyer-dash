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
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-10 flex flex-col gap-1">
              <Skeleton />
              <Skeleton className="w-2/5" />
            </div>
          ))}
        </div>
        <Skeleton className="w-2/6 h-5 sm:absolute sm:bottom-0 sm:right-0" />
      </Card.Content>
    </Card.Root>
  );
};
