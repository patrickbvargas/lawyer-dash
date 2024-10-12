import * as React from 'react';
import { formatter } from '@/utils';
import { DefinitionItemData } from '@/types';
import { EntityDetails, Section } from '@/components';
import { FeeSchemaWithSubjectNameType } from '@/schemas';
import { isLawyerResponsibleForContract } from '@/services';

interface FeeData {
  client: DefinitionItemData[];
  lawyers: DefinitionItemData[];
  details: DefinitionItemData[];
}

interface FeeDetailsProps {
  fee: FeeSchemaWithSubjectNameType;
}
export const FeeDetails = async ({ fee }: FeeDetailsProps) => {
  const getContractClientIdentification = () => {
    if (fee.revenue.contract.client.individual) {
      return formatter.cpf(fee.revenue.contract.client.individual.cpf);
    }
    if (fee.revenue.contract.client.corporate) {
      return formatter.cnpj(fee.revenue.contract.client.corporate.cnpj);
    }
    return 'N/A';
  };

  const getContractLawyersData = (): DefinitionItemData[] => {
    return fee.revenue.contract.lawyers.map((l) => ({
      term: isLawyerResponsibleForContract(l.lawyerAssignment)
        ? 'Responsável'
        : 'Indicação',
      definition: l.lawyer.fullName,
    }));
  };

  const feeData: FeeData = {
    client: [
      {
        term: 'Nome',
        definition: fee.revenue.contract.client.fullName,
      },
      {
        term: fee.revenue.contract.client.individual ? 'CPF' : 'CNPJ',
        definition: getContractClientIdentification(),
      },
      {
        term: 'Celular',
        definition: fee.revenue.contract.client.mobilePhone
          ? formatter.mobilePhone(fee.revenue.contract.client.mobilePhone)
          : 'N/A',
      },
      {
        term: 'E-mail',
        definition: fee.revenue.contract.client.email
          ? fee.revenue.contract.client.email
          : 'N/A',
      },
    ],
    lawyers: getContractLawyersData(),
    details: [
      {
        term: 'Área',
        definition: formatter.legalArea(fee.revenue.contract.legalArea),
      },
      {
        term: 'Receita',
        definition: formatter.revenueType(fee.revenue.type),
      },
      {
        term: 'Parcela',
        definition: `${fee.installmentNumber} / ${fee.revenue.installmentsTotal}`,
      },
      {
        term: 'Valor',
        definition: formatter.currency(fee.value),
      },
      {
        term: 'Data Pagamento',
        definition: formatter.date(fee.paymentDate),
      },
    ],
  };

  return (
    <EntityDetails.Root>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Cliente" />
          <Section.Content>
            <EntityDetails.DefinitionList data={feeData.client} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Advogados" />
          <Section.Content>
            <EntityDetails.DefinitionList data={feeData.lawyers} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Detalhes" />
          <Section.Content>
            <EntityDetails.DefinitionList data={feeData.details} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
    </EntityDetails.Root>
  );
};
