import * as React from 'react';
import { formatter } from '@/utils';
import { Card } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { isLawyerResponsibleForContract } from '@/services';
import { ContractSchemaWithSubjectNameType } from '@/schemas';

interface ContractCardProps {
  contract: ContractSchemaWithSubjectNameType;
}
export const ContractCard = ({ contract }: ContractCardProps) => {
  const getContractResponsibleLawyerFullname = () => {
    return contract.lawyers.find((l) =>
      isLawyerResponsibleForContract(l.lawyerAssignment),
    )?.lawyer.fullName;
  };

  const contractData: CardDefinitionItemData = [
    {
      term: 'Cliente',
      definition: contract.client.fullName,
    },
    {
      term: 'Advogado',
      definition: getContractResponsibleLawyerFullname() || 'N/A',
    },
    {
      term: 'Honorários',
      definition: formatter.percent(contract.feePercent),
      variant: 'highlight',
    },
  ];

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{contract.identification}</Card.Title>
      </Card.Header>
      <Card.Divider />
      <Card.Content>
        <Card.DefinitionList data={contractData} />
        <Card.Badge label={formatter.legalArea(contract.legalArea)} />
      </Card.Content>
    </Card.Root>
  );
};
