import * as React from 'react';
import { formatter } from '@/utils';
import { Card, WithLink } from '@/components';
import { CardDefinitionItemData } from '@/types';
import { RemunerationSchemaWithSubjectNameType } from '@/schemas';

interface RemunerationCardProps {
  remuneration: RemunerationSchemaWithSubjectNameType;
}
export const RemunerationCard = ({ remuneration }: RemunerationCardProps) => {
  const remunerationData: CardDefinitionItemData = [
    {
      term: 'Advogado',
      definition: remuneration.contractLawyer.lawyer.fullName,
    },
    {
      term: 'Data Pagamento',
      definition: formatter.date(remuneration.paymentDate),
    },
    {
      term: 'Valor',
      definition: formatter.currency(remuneration.value),
      variant: 'highlight',
    },
  ];

  return (
    <WithLink href={`/remuneracoes/${remuneration.id}`}>
      <Card.Root>
        <Card.Header>
          <Card.Title>
            {remuneration.contractLawyer.contract.identification}
          </Card.Title>
        </Card.Header>
        <Card.Divider />
        <Card.Content>
          <Card.DefinitionList data={remunerationData} />
          <Card.Badge
            label={formatter.lawyerAssignment(
              remuneration.contractLawyer.lawyerAssignment,
            )}
          />
        </Card.Content>
      </Card.Root>
    </WithLink>
  );
};