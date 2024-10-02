import * as React from 'react';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, LawyerCard, ListEmptyFeedback } from '@/components';

interface LawyerListProps {
  lawyers: LawyerSchemaWithSubjectNameType[];
}
export const LawyerList = async ({ lawyers }: LawyerListProps) => {
  if (lawyers.length === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList>
      {lawyers.map((lawyer) => (
        <LawyerCard key={lawyer.id} lawyer={lawyer} />
      ))}
    </EntityList>
  );
};
