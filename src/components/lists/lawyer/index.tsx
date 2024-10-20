import * as React from 'react';
import { ROUTES } from '@/constants';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, LawyerCard, ListEmptyFeedback, Link } from '@/components';

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
          <Link key={lawyer.id} href={`${ROUTES.lawyer.href}/${lawyer.slug}`}>
            <LawyerCard lawyer={lawyer} />
          </Link>
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
