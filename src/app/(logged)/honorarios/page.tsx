import { getFees } from '@/services';
import { SearchParams } from '@/types';

export default async function FeesPage({ searchParams }: SearchParams) {
  const data = await getFees();
  if (!data) return null;

  return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
