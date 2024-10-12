import * as React from 'react';
import { RemunerationSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, RemunerationCard, ListEmptyFeedback } from '@/components';

interface RemunerationListProps {
  remunerations: RemunerationSchemaWithSubjectNameType[];
  totalRecords: number;
}
export const RemunerationList = async ({
  totalRecords,
  remunerations,
}: RemunerationListProps) => {
  if (totalRecords === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList.Root>
      <EntityList.Content>
        {remunerations.map((remuneration) => (
          <RemunerationCard key={remuneration.id} remuneration={remuneration} />
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
