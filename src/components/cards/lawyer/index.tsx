import * as React from 'react';
import { formatter } from '@/utils';
import { Card, Separator } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';

interface LawyerCardProps {
  lawyer: LawyerSchemaWithSubjectNameType;
}
export const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  const lawyerData: CardDefinitionItemData = [
    {
      term: 'OAB',
      definition: formatter.oab(lawyer.oabNumber),
    },
    {
      term: 'Remuneração',
      definition: formatter.percent(lawyer.remunerationPercent),
    },
    {
      term: 'Contratos',
      definition: lawyer._count.contracts,
      variant: 'highlight',
    },
  ];

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{lawyer.fullName}</Card.Title>
      </Card.Header>
      <Separator />
      <Card.Content>
        <Card.DefinitionList data={lawyerData} />
        <Card.Badge label={formatter.role(lawyer.role)} />
      </Card.Content>
    </Card.Root>
  );
};
