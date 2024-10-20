'use client';
import * as React from 'react';
import { cn } from '@/utils';
import { useSearch } from '@/hooks';
import { Button, Input } from '@/components';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';

// TODO: refatore with react-hook-form
interface SearchProps extends React.ComponentProps<typeof Input> {}
export const Search = ({ className, ...props }: SearchProps) => {
  const { query, handleSearch } = useSearch();
  const [searchValue, setSearchValue] = React.useState(query);

  const handleInputSearch = (newQuery: string) => {
    setSearchValue(newQuery);
    handleSearch(newQuery);
  };

  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute size-4 opacity-60 left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-neutral-400" />
      <Input
        className={cn('px-10', className)}
        value={searchValue}
        onChange={(e) => handleInputSearch(e.target.value)}
        {...props}
      />
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2"
        variant="clear"
        size="icon"
        onClick={() => handleInputSearch('')}
      >
        <XMarkIcon className="size-4 opacity-60" />
      </Button>
    </div>
  );
};
