import * as React from 'react';
import { ROUTES } from '@/constants';
import { RemunerationSchemaWithSubjectNameType } from '@/schemas';
import {
  EntityList,
  RemunerationCard,
  ListEmptyFeedback,
  Link,
} from '@/components';

interface RemunerationListProps {
  remunerations: RemunerationSchemaWithSubjectNameType[];
  totalRecords: number;
}
export const RemunerationList = async ({
  totalRecords,
  remunerations,
}: RemunerationListProps) => {
  if (totalRecords === 0) {
    return <ListEmptyFeedback />;
  }

  return (
    <EntityList.Root>
      <EntityList.Content>
        {remunerations.map((remuneration) => (
          <Link
            key={remuneration.id}
            href={`${ROUTES.remuneration.href}/${remuneration.id}`}
          >
            <RemunerationCard remuneration={remuneration} />
          </Link>
        ))}
      </EntityList.Content>
      <EntityList.Pagination totalRecords={totalRecords} />
    </EntityList.Root>
  );
};
