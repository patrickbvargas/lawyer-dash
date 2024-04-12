import { Card, Chip } from '@/components';
import { CLIENT_TYPE } from '@/constants';
import { getClients } from '@/services';
import { SearchParams } from '@/types';

export default async function ClientsPage({ searchParams }: SearchParams) {
  const data = await getClients();
  if (!data) return null;

  return (
    <Card.List>
      {data.map((item) => (
        <Card.Root key={item.id}>
          <Card.Header title={item.fullName} />
          <Card.Divider />
          <Card.Content>
            {item.individual && (
              <Card.Field label='CPF' value={item.individual.cpf} />
            )}
            {item.corporate && (
              <Card.Field label='CNPJ' value={item.corporate.cnpj} />
            )}
            <Card.Field label='Email' value={item.email} />
            <Card.Field label='Celular' value={item.mobilePhone ?? ''} />
            {item.individual && (
              <Card.Field
                label='Data Nascimento'
                value={item.individual.birthdate.toDateString() ?? ''}
              />
            )}
          </Card.Content>
          <Card.Footer>
            <Card.Field
              label='Contratos'
              value={item.constracts.length}
              isHighlighted={true}
            />
            <Chip
              value={CLIENT_TYPE[item.type].alias}
              variant={CLIENT_TYPE[item.type].value}
            />
          </Card.Footer>
        </Card.Root>
      ))}
    </Card.List>
  );

  // return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
