import * as React from 'react';
import { ClientSchemaWithSubjectNameType } from '@/schemas';
import { EntityList, ClientCard, ListEmptyFeedback, Link } from '@/components';

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
          <Link key={client.id} href={`/clientes/${client.slug}`}>
            <ClientCard client={client} />
          </Link>
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
