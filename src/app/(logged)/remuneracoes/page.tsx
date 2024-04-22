import { SearchParams } from '@/types';
import { getRemunerations } from '@/services';

export default async function RemunerationsPage({
  searchParams,
}: SearchParams) {
  const data = await getRemunerations();
  if (!data) return null;

  return <div>{<pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
}
