import { defineAbilityForUser } from '@/auth/authorization';
import {
  getClients,
  getContracts,
  getFees,
  getLawyers,
  getRemunerations,
  getRevenues,
} from '@/services';

export default async function Home() {
  const data = await getContracts();
  const ability = defineAbilityForUser();

  const authData = data.filter((item) => ability.can('read', item));

  return <pre>{JSON.stringify(authData, null, 2)}</pre>;
}
