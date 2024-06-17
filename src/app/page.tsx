import { getData } from '@/services/commom';

export default async function Home() {
  const data = await getData();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
