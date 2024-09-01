import { defineAbilityForUser } from '@/auth/authorization';
import { getLawyers } from '@/services';
import { DataGrid, Card } from '@/components';

export default async function Home() {
  const data = await getLawyers();
  const ability = defineAbilityForUser();
  const authData = data.filter((item) => ability.can('read', item));

  return (
    <DataGrid.Root>
      <DataGrid.Content>
        {authData.map((item) => (
          <Card.Root key={item.id}>
            <Card.Header>
              <Card.Title>{item.fullName}</Card.Title>
            </Card.Header>
            <Card.Divider />
            <Card.Content>
              <Card.Field label="OAB" value={item.oabNumber} />
              <Card.Field
                label="Remuneração"
                value={item.remunerationPercent}
              />
              <Card.Field
                label="Contratos"
                value={item._count.contracts}
                variant="highlight"
              />
              <Card.Badge label={item.role} />
            </Card.Content>
          </Card.Root>
        ))}
      </DataGrid.Content>
    </DataGrid.Root>
  );
}
