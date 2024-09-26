import * as React from 'react';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';
import { WrapperList, LawyerCard, Empty } from '@/components';

interface LawyerListProps {
  data: LawyerSchemaWithSubjectNameType[];
}
export const LawyerList = async ({ data }: LawyerListProps) => {
  if (data.length === 0) {
    return <Empty title="Nenhum advogado encontrado." />;
  }

  return (
    <WrapperList>
      {data.map((lawyer) => (
        <LawyerCard key={lawyer.id} data={lawyer} />
      ))}
    </WrapperList>
  );
};
