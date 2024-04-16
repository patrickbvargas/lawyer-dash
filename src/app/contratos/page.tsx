import { SearchParams } from '@/types';
import { getContractsFiltered } from '@/services';
import { DataListViewer, Card } from '@/components';
import { CONTRACT_LEGAL_AREA, LAWYER_ASSIGNMENT } from '@/constants';
import { ITEMS_PER_PAGE } from '@/constants';

export default async function ContractsPage({ searchParams }: SearchParams) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || ITEMS_PER_PAGE;
  const query = searchParams.query || '';

  const { data, count } = await getContractsFiltered(page, limit, query);
  if (!data) return null;

  return (
    <DataListViewer
      totalItems={count}
      itemsPerPage={limit}
      searchPlaceholder='Pesquisar por Processo, Cliente e Advogado'
    >
      {data.map((item) => (
        <Card.Root key={item.id} id={item.id} title={item.identification}>
          <Card.Body>
            <Card.Field label='Cliente' value={item.client.fullName} />
            {item.lawyers
              .filter(
                (lawyer) =>
                  lawyer.lawyerAssignment !==
                  LAWYER_ASSIGNMENT.RECOMMENDING.value
              )
              .map((lawyer) => (
                <Card.Field
                  key={lawyer.lawyer.id}
                  label='Advogado'
                  value={lawyer.lawyer.fullName}
                />
              ))}
          </Card.Body>
          <Card.Footer>
            <Card.Field
              label='Honorários'
              value={item.feePercent}
              isHighlighted
            />
            <Card.Chip>{CONTRACT_LEGAL_AREA[item.legalArea].alias}</Card.Chip>
          </Card.Footer>
        </Card.Root>
      ))}
    </DataListViewer>
  );

  // return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
