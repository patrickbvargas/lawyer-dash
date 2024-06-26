'use client';
import { Input } from '@/components';
import { Search as SearchIcon } from '@/lib/lucide';
import { useDebouncedCallback } from '@/lib/debounce';
import { usePathname, useRouter, useSearchParams } from '@/lib/next/client';

interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Input
      startContent={<SearchIcon className='h-4 w-4' />}
      placeholder={placeholder}
      defaultValue={searchParams.get('query')?.toString()}
      onValueChange={handleSearch}
    />
  );
};

export { Search };
