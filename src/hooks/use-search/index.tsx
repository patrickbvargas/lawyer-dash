'use client';
import { useUrlSearchParams } from '@/hooks';
import { useDebouncedCallback } from 'use-debounce';
import { PAGE_NUMBER_ALIAS } from '@/constants/pagination';
import { SEARCH_TERM_DEFAULT, SEARCH_TERM_ALIAS } from '@/constants/search';

export function useSearch() {
  const { searchParams, handleSearchParams } = useUrlSearchParams();

  const query = searchParams.get(SEARCH_TERM_ALIAS) || SEARCH_TERM_DEFAULT;

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE_NUMBER_ALIAS, '1');
    if (query) {
      params.set(SEARCH_TERM_ALIAS, query);
    } else {
      params.delete(SEARCH_TERM_ALIAS);
    }
    handleSearchParams(params);
  }, 300);

  return { query, handleSearch };
}
