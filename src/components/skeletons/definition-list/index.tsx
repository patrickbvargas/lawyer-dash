import { Skeleton } from '@/components';

export const DefinitionListSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4" />
      <Skeleton className="h-4 w-3/6" />
    </div>
  );
};
