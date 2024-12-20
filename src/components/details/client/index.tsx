import * as React from 'react';
import { formatter } from '@/utils';
import { DefinitionItemData } from '@/types';
import { EntityDetails, Section } from '@/components';
import { ClientSchemaWithSubjectNameType } from '@/schemas';

interface ClientData {
  identification: DefinitionItemData[];
  contact: DefinitionItemData[];
  details: DefinitionItemData[];
}

interface ClientDetailsProps {
  client: ClientSchemaWithSubjectNameType;
}
export const ClientDetails = async ({ client }: ClientDetailsProps) => {
  const getClientIdentificationData = (): DefinitionItemData[] => {
    if (client.individual) {
      return [
        {
          term: 'CPF',
          definition: formatter.cpf(client.individual.cpf),
        },
        {
          term: 'Data de nascimento',
          definition: client.individual.birthdate
            ? formatter.date(client.individual.birthdate)
            : 'N/A',
        },
        {
          term: 'Estado civil',
          definition: formatter.maritalStatus(client.individual.maritalStatus),
        },
      ];
    }

    if (client.corporate) {
      return [
        {
          term: 'CNPJ',
          definition: formatter.cnpj(client.corporate.cnpj),
        },
        {
          term: 'Razão social',
          definition: client.corporate.legalName,
        },
      ];
    }

    throw new Error('Unknown client type');
  };

  const clientData: ClientData = {
    identification: getClientIdentificationData(),
    contact: [
      {
        term: 'Celular',
        definition: client.mobilePhone
          ? formatter.mobilePhone(client.mobilePhone)
          : 'N/A',
      },
      {
        term: 'E-mail',
        definition: client.email ? client.email : 'N/A',
      },
    ],
    details: [
      {
        term: 'Contratos',
        definition: client._count.contracts,
      },
      {
        term: 'Status',
        definition: formatter.status(client.status),
      },
    ],
  };

  return (
    <EntityDetails.Root>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Identificação" />
          <Section.Content>
            <EntityDetails.DefinitionList data={clientData.identification} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Contato" />
          <Section.Content>
            <EntityDetails.DefinitionList data={clientData.contact} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Detalhes" />
          <Section.Content>
            <EntityDetails.DefinitionList data={clientData.details} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
    </EntityDetails.Root>
  );
};
