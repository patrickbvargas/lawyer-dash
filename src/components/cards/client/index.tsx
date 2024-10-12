import * as React from 'react';
import { formatter } from '@/utils';
import { Card, WithLink } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { ClientSchemaWithSubjectNameType } from '@/schemas';

interface ClientCardProps {
  client: ClientSchemaWithSubjectNameType;
}
export const ClientCard = ({ client }: ClientCardProps) => {
  const getClientIdentification = () => {
    if (client.individual) {
      return formatter.cpf(client.individual.cpf);
    }
    if (client.corporate) {
      return formatter.cnpj(client.corporate.cnpj);
    }
    return 'N/A';
  };

  const clientData: CardDefinitionItemData = [
    {
      term: client.individual ? 'CPF' : 'CNPJ',
      definition: getClientIdentification(),
    },
    {
      term: 'Celular',
      definition: client.mobilePhone
        ? formatter.mobilePhone(client.mobilePhone)
        : 'N/A',
    },
    {
      term: 'Contratos',
      definition: client._count.contracts,
      variant: 'highlight',
    },
  ];

  return (
    <WithLink href={`/clientes/${client.slug}`}>
      <Card.Root>
        <Card.Header>
          <Card.Title>{client.fullName}</Card.Title>
        </Card.Header>
        <Card.Divider />
        <Card.Content>
          <Card.DefinitionList data={clientData} />
          <Card.Badge label={client.individual ? 'PF' : 'PJ'} />
        </Card.Content>
      </Card.Root>
    </WithLink>
  );
};
