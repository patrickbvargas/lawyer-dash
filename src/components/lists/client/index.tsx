import * as React from 'react';
import { ClientSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, ClientCard, ListEmptyFeedback } from '@/components';

interface ClientListProps {
  clients: ClientSchemaWithSubjectNameType[];
  totalRecords: number;
}
export const ClientList = async ({
  totalRecords,
  clients,
}: ClientListProps) => {
  if (totalRecords === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList.Root>
      <EntityList.Content>
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
