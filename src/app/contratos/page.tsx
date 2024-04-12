import { getContractsFiltered } from '@/services';
import { SearchParams } from '@/types';
import { Card, Chip, Pagination } from '@/components';
import { CONTRACT_LEGAL_AREA, CONTRACT_STATUS } from '@/constants';

export default async function ContractsPage({ searchParams }: SearchParams) {
  const { page, limit } = searchParams;
  const data = await getContractsFiltered(
    Number(page) || 1,
    Number(limit) || 10
  );
  if (!data) return null;

  return (
    <div className='space-y-4'>
      <Card.List>
        {data.map((item) => (
          <Card.Root key={item.id}>
            <Card.Header title={item.identification} />
            <Card.Divider />
            <Card.Content>
              <Card.Field label='Cliente' value={item.client.fullName} />
              <Card.Field
                label='Status'
                value={CONTRACT_STATUS[item.status].alias}
              />
              {item.lawyers.map((lawyer) => (
                <Card.Field
                  label='Advogado'
                  value={lawyer.lawyer.fullName}
                  key={lawyer.id}
                />
              ))}
            </Card.Content>
            <Card.Divider />
            <Card.Footer>
              <Card.Field
                label='Honorários'
                value={item.feePercent}
                isHighlighted={true}
              />
              <Chip
                value={CONTRACT_LEGAL_AREA[item.legalArea].alias}
                variant={CONTRACT_LEGAL_AREA[item.legalArea].value}
              />
            </Card.Footer>
          </Card.Root>
        ))}
      </Card.List>
      <Pagination totalItems={8} />
    </div>
  );

  // return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
