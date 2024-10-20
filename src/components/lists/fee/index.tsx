import * as React from 'react';
import { ROUTES } from '@/constants';
import { FeeSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, FeeCard, ListEmptyFeedback, Link } from '@/components';

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
          <Link key={fee.id} href={`${ROUTES.fee.href}/${fee.id}`}>
            <FeeCard fee={fee} />
          </Link>
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
