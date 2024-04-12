import { getFees } from '@/services';
import { SearchParams } from '@/types';
import { Card, Chip } from '@/components';
import { REVENUE_TYPE } from '@/constants';

export default async function FeesPage({ searchParams }: SearchParams) {
  const data = await getFees();
  if (!data) return null;

  return (
    <Card.List>
      {data.map((item) => (
        <Card.Root key={item.id}>
          <Card.Header title={item.revenue.contract.identification} />
          <Card.Divider />
          <Card.Content>
            <Card.Field
              label='Cliente'
              value={item.revenue.contract.client.fullName}
            />
            <Card.Field
              label='Data Pagamento'
              value={item.paymentDate.toLocaleDateString()}
            />
          </Card.Content>
          <Card.Footer>
            <Card.Field label='Valor' value={item.value} isHighlighted={true} />
            <Chip
              value={REVENUE_TYPE[item.revenue.type].alias}
              variant={REVENUE_TYPE[item.revenue.type].value}
            />
          </Card.Footer>
        </Card.Root>
      ))}
    </Card.List>
  );

  return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
