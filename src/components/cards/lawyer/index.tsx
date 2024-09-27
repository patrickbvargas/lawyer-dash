import * as React from 'react';
import { Card } from '@/components';
import { getLawyerRoleAlias } from '@/utils';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';

interface LawyerCardProps {
  lawyer: LawyerSchemaWithSubjectNameType;
}
export const LawyerCard = ({ lawyer }: LawyerCardProps) => {
  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{lawyer.fullName}</Card.Title>
      </Card.Header>
      <Card.Divider />
      <Card.Content>
        <Card.Field label="OAB" value={lawyer.oabNumber} />
        <Card.Field
          label="Remuneração"
          value={lawyer.remunerationPercent.toLocaleString('pt-BR', {
            style: 'percent',
          })}
        />
        <Card.Field
          label="Contratos"
          value={lawyer._count.contracts}
          variant="highlight"
        />
        <Card.Badge label={getLawyerRoleAlias(lawyer.role)} />
      </Card.Content>
    </Card.Root>
  );
};
