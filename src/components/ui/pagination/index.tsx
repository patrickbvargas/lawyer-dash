'use client';
import { React } from '@/lib/react';
import { NextUI } from '@/lib/next-ui';
import { usePathname, useRouter, useSearchParams } from '@/lib/next/client';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({ totalItems, itemsPerPage }: PaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get('page') || 1);

  // TODO: fix
  React.useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    console.log(`page ${pageNumber}`, itemsPerPage);
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    params.set('limit', itemsPerPage.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const renderPaginationFeedback = () => {
    const initialItem = (currentPage - 1) * itemsPerPage;
    const finalItem = initialItem + itemsPerPage;

    return (
      <p className='text-sm text-foreground-500'>
        {totalItems === 1
          ? 'Exibindo 1 de 1 registro'
          : `Exibindo ${initialItem + 1} a ${Math.min(finalItem, totalItems)} de ${totalItems} registros`}
      </p>
    );
  };

  return (
    <div className='flex items-center justify-end gap-unit-4'>
      {renderPaginationFeedback()}
      <NextUI.Pagination
        total={Math.ceil(totalItems / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export { Pagination };
