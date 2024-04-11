import { Card, Chip } from '@/components';
import { LAWYER_ROLE } from '@/constants';
import {
  getClientById,
  getClients,
  getContractById,
  getContracts,
  getFeeById,
  getFees,
  getLawyerById,
  getLawyers,
  getRemunerationById,
  getRemunerations,
  getRevenueById,
  getRevenues,
} from '@/services';

export default async function Home() {
  const data = await getLawyers();
  // const data = await getLawyerById('clulzfcsd000208l7ageqari8');
  // const data = await getClients();
  // const data = await getClientById('clulzhrq7000b08l7eixb3syl');
  // const data = await getContracts();
  // const data = await getContractById('clulzpc8d000o08l7hi1n43mt');
  // const data = await getRevenues();
  // const data = await getRevenueById('cluo5dq7h000209jk8lmn34ez');
  // const data = await getFees();
  // const data = await getFeeById('cluo5nmpw000j09jk01vf89hv');
  // const data = await getRemunerations();
  // const data = await getRemunerationById('cluo5x7bc000308jmglbh803o');

  if (!data) return null;

  return (
    <Card.List>
      {data.map((item) => (
        <Card.Root key={item.id}>
          <Card.Header title={item.fullName} />
          <Card.Divider />
          <Card.Content>
            <Card.Field label='OAB' value={item.oabNumber} />
            <Card.Field label='Perfil' value={item.role} />
            <Card.Field
              label='Remuneração'
              value={item.remunerationPercent}
              isHighlighted={true}
            />
            <Chip value={LAWYER_ROLE[item.role].alias} variant={item.role} />
          </Card.Content>
        </Card.Root>
      ))}
    </Card.List>
  );

  // return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
