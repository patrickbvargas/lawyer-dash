import * as React from 'react';
import { ROUTES } from '@/constants';
import { ClientSchemaWithSubjectNameType } from '@/schemas';
import {
  Link,
  EntityList,
  ClientCard,
  ListEmptyFeedback,
  PaginationControl,
} from '@/components';

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
          <Link key={client.id} href={`${ROUTES.client.href}/${client.slug}`}>
            <ClientCard client={client} />
          </Link>
        ))}
      </EntityList.Content>
      <EntityList.Footer>
        <PaginationControl totalRecords={totalRecords} />
      </EntityList.Footer>
    </EntityList.Root>
  );
};
