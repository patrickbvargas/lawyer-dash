import * as React from 'react';
import { formatter } from '@/utils';
import { Card, WithLink } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { FeeSchemaWithSubjectNameType } from '@/schemas';

interface FeeCardProps {
  fee: FeeSchemaWithSubjectNameType;
}
export const FeeCard = ({ fee }: FeeCardProps) => {
  const feeData: CardDefinitionItemData = [
    {
      term: 'Cliente',
      definition: fee.revenue.contract.client.fullName,
    },
    {
      term: 'Data Pagamento',
      definition: formatter.date(fee.paymentDate),
    },
    {
      term: 'Valor',
      definition: formatter.currency(fee.value),
      variant: 'highlight',
    },
  ];

  return (
    <WithLink href={`/honorarios/${fee.id}`}>
      <Card.Root>
        <Card.Header>
          <Card.Title>{fee.revenue.contract.identification}</Card.Title>
        </Card.Header>
        <Card.Divider />
        <Card.Content>
          <Card.DefinitionList data={feeData} />
          <Card.Badge label={formatter.revenueType(fee.revenue.type)} />
        </Card.Content>
      </Card.Root>
    </WithLink>
  );
};
