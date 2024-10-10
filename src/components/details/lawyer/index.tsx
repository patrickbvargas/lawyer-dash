import * as React from 'react';
import { formatter } from '@/utils';
import { DefinitionItemData } from '@/types';
import { EntityDetails, Section } from '@/components';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';

interface LawyerData {
  identification: DefinitionItemData[];
  financial: DefinitionItemData[];
  details: DefinitionItemData[];
}

interface LawyerDetailsProps {
  lawyer: LawyerSchemaWithSubjectNameType;
}
export const LawyerDetails = async ({ lawyer }: LawyerDetailsProps) => {
  const lawyerData: LawyerData = {
    identification: [
      {
        term: 'OAB',
        definition: formatter.oab(lawyer.oabNumber),
      },
      {
        term: 'Perfil',
        definition: formatter.role(lawyer.role),
      },
    ],
    financial: [
      {
        term: 'Remuneração',
        definition: formatter.percent(lawyer.remunerationPercent),
      },
    ],
    details: [
      {
        term: 'Contratos',
        definition: lawyer._count.contracts,
      },
      {
        term: 'Status',
        definition: formatter.status(lawyer.status),
      },
    ],
  };

  return (
    <EntityDetails.Root>
      <Section.Root>
        <Section.Title title="Identificação" />
        <Section.Content>
          <EntityDetails.DefinitionList data={lawyerData.identification} />
        </Section.Content>
      </Section.Root>
      <Section.Root>
        <Section.Title title="Financeiro" />
        <Section.Content>
          <EntityDetails.DefinitionList data={lawyerData.financial} />
        </Section.Content>
      </Section.Root>
      <Section.Root>
        <Section.Title title="Detalhes" />
        <Section.Content>
          <EntityDetails.DefinitionList data={lawyerData.details} />
        </Section.Content>
      </Section.Root>
    </EntityDetails.Root>
  );
};
