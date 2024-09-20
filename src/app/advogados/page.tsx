import { defineAbilityForUser } from '@/auth/authorization';
import { getLawyers } from '@/services';
import { DataGrid, LawyerCard, Pagination, Search } from '@/components';

export default async function Home() {
  const data = await getLawyers();
  const ability = defineAbilityForUser();
  const authData = data.filter((item) => ability.can('read', item));

  return (
    <DataGrid.Root>
      <DataGrid.Header>
        <Search placeholder="Pesquisar por Nome ou OAB (implementar)" />
      </DataGrid.Header>
      <DataGrid.Content>
        {authData.map((lawyer) => (
          <LawyerCard key={lawyer.id} data={lawyer} />
        ))}
      </DataGrid.Content>
      <DataGrid.Footer>
        <Pagination totalRecords={200} />
      </DataGrid.Footer>
    </DataGrid.Root>
  );
}
