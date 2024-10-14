'use client';
import * as React from 'react';
import { cn } from '@/utils';
import { useSearch } from '@/hooks';
import { Button, Input } from '@/components';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface SearchProps extends React.ComponentProps<typeof Input> {}
export const Search = ({ className, ...props }: SearchProps) => {
  const { query, handleSearch, clearSearch } = useSearch();

  return (
    <div className="relative">
      <MagnifyingGlassIcon className="absolute size-4 opacity-60 left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-neutral-400" />
      <Input
        className={cn('px-10', className)}
        defaultValue={query}
        onChange={(e) => handleSearch(e.target.value)}
        {...props}
      />
      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2"
        variant="clear"
        size="icon"
        onClick={clearSearch}
      >
        <XMarkIcon className="size-4 opacity-60" />
      </Button>
    </div>
  );
};
