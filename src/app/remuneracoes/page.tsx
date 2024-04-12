import { SearchParams } from '@/types';
import { Card, Chip } from '@/components';
import { getRemunerations } from '@/services';
import { LAWYER_ASSIGNMENT } from '@/constants';

export default async function RemunerationsPage({
  searchParams,
}: SearchParams) {
  const data = await getRemunerations();
  if (!data) return null;

  return (
    <Card.List>
      {data.map((item) => (
        <Card.Root key={item.id}>
          <Card.Header title={item.id} />
          <Card.Divider />
          <Card.Content>
            <Card.Field label='Advogado' value={item.lawyer.fullName} />
            <Card.Field
              label='Data Pagamento'
              value={item.paymentDate.toLocaleDateString()}
            />
          </Card.Content>
          <Card.Footer>
            <Card.Field label='Valor' value={item.value} isHighlighted={true} />
            <Chip
              value={
                LAWYER_ASSIGNMENT[
                  item.fee.revenue.contract.lawyers[0].lawyerAssignment
                ].alias
              }
              variant={
                LAWYER_ASSIGNMENT[
                  item.fee.revenue.contract.lawyers[0].lawyerAssignment
                ].value
              }
            />
          </Card.Footer>
        </Card.Root>
      ))}
    </Card.List>
  );

  return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
