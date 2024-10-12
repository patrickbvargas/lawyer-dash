import * as React from 'react';
import { formatter } from '@/utils';
import { DefinitionItemData } from '@/types';
import { EntityDetails, Section } from '@/components';
import { RemunerationSchemaWithSubjectNameType } from '@/schemas';

interface RemunerationData {
  lawyer: DefinitionItemData[];
  contract: DefinitionItemData[];
  details: DefinitionItemData[];
}

interface RemunerationDetailsProps {
  remuneration: RemunerationSchemaWithSubjectNameType;
}
export const RemunerationDetails = async ({
  remuneration,
}: RemunerationDetailsProps) => {
  const remunerationData: RemunerationData = {
    lawyer: [
      {
        term: 'Nome',
        definition: remuneration.contractLawyer.lawyer.fullName,
      },
      {
        term: 'Atribuição',
        definition: formatter.lawyerAssignment(
          remuneration.contractLawyer.lawyerAssignment,
        ),
      },
    ],
    contract: [
      {
        term: 'Processo',
        definition: remuneration.contractLawyer.contract.identification,
      },
      {
        term: 'Área',
        definition: formatter.legalArea(
          remuneration.contractLawyer.contract.legalArea,
        ),
      },
    ],
    details: [
      {
        term: 'Participação',
        definition: formatter.percent(remuneration.remunerationPercent),
      },

      {
        term: 'Valor',
        definition: formatter.currency(remuneration.value),
      },
      {
        term: 'Data Pagamento',
        definition: formatter.date(remuneration.paymentDate),
      },
    ],
  };

  return (
    <EntityDetails.Root>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Advogado" />
          <Section.Content>
            <EntityDetails.DefinitionList data={remunerationData.lawyer} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Contrato" />
          <Section.Content>
            <EntityDetails.DefinitionList data={remunerationData.contract} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
      <EntityDetails.Group>
        <Section.Root>
          <Section.Title title="Detalhes" />
          <Section.Content>
            <EntityDetails.DefinitionList data={remunerationData.details} />
          </Section.Content>
        </Section.Root>
      </EntityDetails.Group>
    </EntityDetails.Root>
  );
};
