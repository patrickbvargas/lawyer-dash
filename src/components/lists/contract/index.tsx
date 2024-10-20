import * as React from 'react';
import { ROUTES } from '@/constants';
import { ContractSchemaWithSubjectNameType } from '@/schemas';
import {
  EntityList,
  ContractCard,
  ListEmptyFeedback,
  Link,
} from '@/components';

interface ContractListProps {
  contracts: ContractSchemaWithSubjectNameType[];
  totalRecords: number;
}
export const ContractList = async ({
  totalRecords,
  contracts,
}: ContractListProps) => {
  if (totalRecords === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList.Root>
      <EntityList.Content>
        {contracts.map((contract) => (
          <Link
            key={contract.id}
            href={`${ROUTES.contract.href}/${contract.slug}`}
          >
            <ContractCard contract={contract} />
          </Link>
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
