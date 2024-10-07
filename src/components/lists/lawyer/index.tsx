import * as React from 'react';
import { EntityList, LawyerCard, ListEmptyFeedback } from '@/components';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';

interface LawyerListProps {
  lawyers: LawyerSchemaWithSubjectNameType[];
  totalRecords: number;
}
export const LawyerList = async ({
  totalRecords,
  lawyers,
}: LawyerListProps) => {
  if (totalRecords === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList.Root>
      <EntityList.Content>
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
