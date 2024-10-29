import * as React from 'react';
import {
  Card,
  Skeleton,
  Separator,
  DefinitionListSkeleton,
} from '@/components';

export const CardSkeleton = () => {
  return (
    <Card.Root className="pointer-events-none">
      <Card.Header>
        <Skeleton className="h-4" />
      </Card.Header>
      <Separator />
      <Card.Content>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <DefinitionListSkeleton key={index} />
          ))}
        </div>
        <Skeleton className="w-2/6 h-5 sm:absolute sm:bottom-0 sm:right-0" />
      </Card.Content>
    </Card.Root>
  );
};
