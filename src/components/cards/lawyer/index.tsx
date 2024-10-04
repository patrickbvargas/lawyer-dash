import * as React from 'react';
import { Card, WithLink } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';
import { getLawyerRoleAlias, getPercentLocaleString } from '@/utils';

interface LawyerCardProps {
  lawyer: LawyerSchemaWithSubjectNameType;
}
export const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  const lawyerData: CardDefinitionItemData = [
    {
      term: 'OAB',
      definition: lawyer.oabNumber,
    },
    {
      term: 'Remuneração',
      definition: getPercentLocaleString(lawyer.remunerationPercent),
    },
    {
      term: 'Contratos',
      definition: lawyer._count.contracts,
      variant: 'highlight',
    },
  ];

  return (
    <WithLink href={`/advogados/${lawyer.slug}`}>
      <Card.Root>
        <Card.Header>
          <Card.Title>{lawyer.fullName}</Card.Title>
        </Card.Header>
        <Card.Divider />
        <Card.Content>
          <Card.DefinitionList data={lawyerData} />
          <Card.Badge label={getLawyerRoleAlias(lawyer.role)} />
        </Card.Content>
      </Card.Root>
    </WithLink>
  );
};
