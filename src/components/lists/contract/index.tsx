import * as React from 'react';
import { ContractSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, ContractCard, ListEmptyFeedback } from '@/components';

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
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
