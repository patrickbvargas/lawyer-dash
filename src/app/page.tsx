import { defineAbilityForUser } from '@/auth/authorization';
import { getData } from '@/services/commom';

export default async function Home() {
  const data = await getData();
  const ability = defineAbilityForUser();

  const authData = data.filter((item) => ability.can('read', item));

  return <pre>{JSON.stringify(authData, null, 2)}</pre>;
}
