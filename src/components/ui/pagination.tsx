'use client';
import * as React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components';

interface PaginationProps {
  totalItems: number;
}

const Pagination = ({ totalItems }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(2);
  const [totalPages, setTotalPages] = React.useState(
    Math.floor(totalItems / itemsPerPage)
  );

  React.useEffect(() => {
    setTotalPages(Math.floor(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    replace(`${pathname}?${params.toString()}`);
    setCurrentPage(page);
  };

  return (
    <div className='space-x-2'>
      {Array(totalPages)
        .fill(0)
        .map((_, index) => (
          <Button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            variant={index + 1 === currentPage ? 'primary' : 'ghost'}
          >
            {index + 1}
          </Button>
        ))}
    </div>
  );
};

export { Pagination };
