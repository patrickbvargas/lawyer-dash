'use client';
import * as React from 'react';
import { useSearch } from '@/hooks';
import { Input } from '@/components';

interface SearchProps extends React.ComponentProps<typeof Input> {}
export const Search = ({ className, ...props }: SearchProps) => {
  const { query, handleSearch } = useSearch();

  return (
    <Input
      defaultValue={query}
      onChange={(e) => handleSearch(e.target.value)}
      {...props}
    />
  );
};
