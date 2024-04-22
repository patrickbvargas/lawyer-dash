import { SearchParams } from '@/types';
import { getClientsFiltered } from '@/services';
import { DataListViewer, Card } from '@/components';
import { CLIENT_TYPE, ITEMS_PER_PAGE } from '@/constants';

export default async function ClientsPage({ searchParams }: SearchParams) {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || ITEMS_PER_PAGE;
  const query = searchParams.query || '';

  const { data, count } = await getClientsFiltered(page, limit, query);
  if (!data) return null;

  return (
    <DataListViewer
      totalItems={count}
      itemsPerPage={limit}
      searchPlaceholder='Pesquisar por Nome, CPF e CNPJ'
    >
      {data.map((item) => (
        <Card.Root key={item.id} id={item.id} title={item.fullName}>
          <Card.Body>
            {item.individual && (
              <Card.Field label='CPF' value={item.individual.cpf} />
            )}
            {item.corporate && (
              <Card.Field label='CNPJ' value={item.corporate.cnpj} />
            )}
            <Card.Field label='Email' value={item.email} />
          </Card.Body>
          <Card.Footer>
            <Card.Field
              label='Contratos'
              value={item.constracts.length}
              isHighlighted
            />
            <Card.Chip>{CLIENT_TYPE[item.type].alias}</Card.Chip>
          </Card.Footer>
        </Card.Root>
      ))}
    </DataListViewer>
  );

  // return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
