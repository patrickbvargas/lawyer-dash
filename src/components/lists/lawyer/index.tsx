import * as React from 'react';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';
import { ListWrapper, LawyerCard, Empty } from '@/components';

interface LawyerListProps {
  lawyers: LawyerSchemaWithSubjectNameType[];
}
export const LawyerList = async ({ lawyers }: LawyerListProps) => {
  if (lawyers.length === 0) {
    return <Empty title="Nenhum advogado encontrado." />;
  }

  return (
    <ListWrapper>
      {lawyers.map((lawyer) => (
        <LawyerCard key={lawyer.id} lawyer={lawyer} />
      ))}
    </ListWrapper>
  );
};
