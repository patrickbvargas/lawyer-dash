import * as React from 'react';
import { FeeSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, FeeCard, ListEmptyFeedback } from '@/components';

interface FeeListProps {
  fees: FeeSchemaWithSubjectNameType[];
  totalRecords: number;
}
export const FeeList = async ({ totalRecords, fees }: FeeListProps) => {
  if (totalRecords === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList.Root>
      <EntityList.Content>
        {fees.map((fee) => (
          <FeeCard key={fee.id} fee={fee} />
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
