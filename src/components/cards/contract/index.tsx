import * as React from 'react';
import { formatter } from '@/utils';
import { Card, WithLink } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { ContractSchemaWithSubjectNameType } from '@/schemas';
import { RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS } from '@/constants';

interface ContractCardProps {
  contract: ContractSchemaWithSubjectNameType;
}
export const ContractCard = ({ contract }: ContractCardProps) => {
  function getContractResponsibleLawyerFullname() {
    return contract.lawyers.find((l) =>
      RESPONSIBLE_CONTRACT_LAWYER_ASSIGNMENTS.some(
        (assignment) => assignment === l.lawyerAssignment,
      ),
    )?.lawyer.fullName;
  }

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
    <WithLink href={`/contratos/${contract.slug}`}>
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
    </WithLink>
  );
};
