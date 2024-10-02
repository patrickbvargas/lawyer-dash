import * as React from 'react';
import { getLawyerRoleAlias } from '@/utils';
import { DefinitionItemData } from '@/types';
import { EntityDetails, SectionTitle } from '@/components';
import { LawyerSchemaWithSubjectNameType } from '@/schemas';

interface LawyerData {
  identification: DefinitionItemData[];
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
        definition: lawyer.oabNumber,
      },
      {
        term: 'Perfil',
        definition: getLawyerRoleAlias(lawyer.role),
      },
    ],
    details: [
      {
        term: 'Remuneração',
        definition: lawyer.remunerationPercent.toLocaleString('pt-BR', {
          style: 'percent',
        }),
      },
      {
        term: 'Contratos',
        definition: lawyer._count.contracts,
      },
    ],
  };

  return (
    <EntityDetails.Root>
      <EntityDetails.Section>
        <SectionTitle title="Identificação" />
        <EntityDetails.DefinitionList data={lawyerData.identification} />
      </EntityDetails.Section>
      <EntityDetails.Section>
        <SectionTitle title="Detalhes" />
        <EntityDetails.DefinitionList data={lawyerData.details} />
      </EntityDetails.Section>
    </EntityDetails.Root>
  );
};
