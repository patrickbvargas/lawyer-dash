import * as React from 'react';
import { formatter } from '@/utils';
import { DefinitionItemData } from '@/types';
import { EntityDetails, Section } from '@/components';
import {
  ContractSchemaWithSubjectNameType,
  RevenueSchemaType,
} from '@/schemas';
import { isLawyerResponsibleForContract } from '@/services';

interface ContractData {
  client: DefinitionItemData[];
  lawyers: DefinitionItemData[];
  details: DefinitionItemData[];
}

interface ContractDetailsProps {
  contract: ContractSchemaWithSubjectNameType;
}
export const ContractDetails = async ({ contract }: ContractDetailsProps) => {
  const getContractClientIdentification = () => {
    if (contract.client.individual) {
      return formatter.cpf(contract.client.individual.cpf);
    }
    if (contract.client.corporate) {
      return formatter.cnpj(contract.client.corporate.cnpj);
    }
    return 'N/A';
  };

  const getContractLawyersData = (): DefinitionItemData[] => {
    return contract.lawyers.map((l) => ({
      term: isLawyerResponsibleForContract(l.lawyerAssignment)
        ? 'Responsável'
        : 'Indicação',
      definition: l.lawyer.fullName,
    }));
  };

  const getContractRevenueData = (
    revenue: RevenueSchemaType,
  ): DefinitionItemData[] => {
    return [
      {
        term: 'Valor',
        definition: formatter.currency(revenue.totalValue),
      },
      {
        term: 'Entrada',
        definition: formatter.currency(revenue.entryValue),
      },
      {
        term: 'Parcelas',
        definition: revenue.installmentsTotal,
      },
      {
        term: 'Pagas',
        definition: revenue.installmentsPaid,
      },
      {
        term: 'Início Pagamento',
        definition: formatter.date(revenue.paymentStartDate),
      },
    ];
  };

  const contractData: ContractData = {
    client: [
      {
        term: 'Nome',
        definition: contract.client.fullName,
      },
      {
        term: contract.client.individual ? 'CPF' : 'CNPJ',
        definition: getContractClientIdentification(),
      },
      {
        term: 'Celular',
        definition: contract.client.mobilePhone
          ? formatter.mobilePhone(contract.client.mobilePhone)
          : 'N/A',
      },
      {
        term: 'E-mail',
        definition: contract.client.email ? contract.client.email : 'N/A',
      },
    ],
    lawyers: getContractLawyersData(),
    details: [
      {
        term: 'Área',
        definition: formatter.legalArea(contract.legalArea),
      },
      {
        term: 'Honorários',
        definition: formatter.percent(contract.feePercent),
      },
      {
        term: 'Observações',
        definition: contract.observation || 'N/A',
      },
      {
        term: 'Status',
        definition: formatter.status(contract.status),
      },
    ],
  };

  return (
    <EntityDetails.Root>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Cliente" />
          <Section.Content>
            <EntityDetails.DefinitionList data={contractData.client} />
          </Section.Content>
        </Section.Root>
        <Section.Root>
          <Section.Title title="Advogados" />
          <Section.Content>
            <EntityDetails.DefinitionList data={contractData.lawyers} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      {contract.revenues.map((revenue) => (
        <EntityDetails.Group key={revenue.id}>
          <Section.Root>
            <Section.Title title={formatter.revenueType(revenue.type)} />
            <Section.Content>
              <EntityDetails.DefinitionList
                data={getContractRevenueData(revenue)}
              />
            </Section.Content>
          </Section.Root>
        </EntityDetails.Group>
      ))}
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Detalhes" />
          <Section.Content>
            <EntityDetails.DefinitionList data={contractData.details} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
    </EntityDetails.Root>
  );
};
