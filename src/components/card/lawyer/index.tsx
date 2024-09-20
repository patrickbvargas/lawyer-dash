import * as React from 'react';
import { Card } from '@/components';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';

interface LawyerCardProps extends React.ComponentProps<typeof Card.Root> {
  data: LawyerSchemaWithSubjectNameType;
}
export const LawyerCard = ({ data, className, ...props }: LawyerCardProps) => {
  return (
    <Card.Root {...props}>
      <Card.Header>
        <Card.Title>{data.fullName}</Card.Title>
      </Card.Header>
      <Card.Divider />
      <Card.Content>
        <Card.Field label="OAB" value={data.oabNumber} />
        <Card.Field
          label="Remuneração"
          value={data.remunerationPercent.toLocaleString('pt-BR', {
            style: 'percent',
          })}
        />
        <Card.Field
          label="Contratos"
          value={data._count.contracts}
          variant="highlight"
        />
        <Card.Badge label={data.role} />
      </Card.Content>
    </Card.Root>
  );
};
