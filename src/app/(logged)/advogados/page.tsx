import { SearchParams } from '@/types';
import { getLawyersFiltered } from '@/services';
import { DataListViewer, Card } from '@/components';
import { LAWYER_ROLE, ITEMS_PER_PAGE } from '@/constants';

export default async function LawyersPage({ searchParams }: SearchParams) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || ITEMS_PER_PAGE;
  const query = searchParams.query || '';

  const { data, count } = await getLawyersFiltered(page, limit, query);
  if (!data) return null;

  return (
    <DataListViewer
      totalItems={count}
      itemsPerPage={limit}
      searchPlaceholder='Pesquisar por Advogado e AOB'
    >
      {data.map((item) => (
        <Card.Root key={item.id} id={item.id} title={item.fullName}>
          <Card.Body>
            <Card.Field label='OAB' value={item.oabNumber} />
            <Card.Field label='Remuneração' value={item.remunerationPercent} />
          </Card.Body>
          <Card.Footer>
            <Card.Field
              label='Contratos'
              value={item.contracts.length}
              isHighlighted
            />
            <Card.Chip>{LAWYER_ROLE[item.role].alias}</Card.Chip>
          </Card.Footer>
        </Card.Root>
      ))}
    </DataListViewer>
  );

  // return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
