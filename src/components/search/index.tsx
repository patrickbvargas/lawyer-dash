'use client';
import * as React from 'react';
import { cn } from '@/utils';
import { useSearch } from '@/hooks';
import { Button, Input } from '@/components';
import { IconSearch, IconX } from '@/assets/icons';

// TODO: refatore with react-hook-form
export const Search = ({
  className,
  ...props
}: React.ComponentProps<typeof Input>) => {
  const { query, handleSearch } = useSearch();
  const [searchValue, setSearchValue] = React.useState(query);

  const handleInputSearch = (newQuery: string) => {
    setSearchValue(newQuery);
    handleSearch(newQuery);
  };

  return (
    <div className="relative p-1">
      <IconSearch className="absolute size-4 opacity-60 left-4 top-1/2 -translate-y-1/2 text-foreground" />
      <Input
        className={cn('px-10', className)}
        value={searchValue}
        onChange={(e) => handleInputSearch(e.target.value)}
        {...props}
      />
      <Button
        className="absolute right-1 top-1/2 -translate-y-1/2"
        variant="ghost"
        size="icon"
        onClick={() => handleInputSearch('')}
      >
        <IconX className="size-4 opacity-60" />
      </Button>
    </div>
  );
};
