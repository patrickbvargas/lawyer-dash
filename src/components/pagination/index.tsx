'use client';
import { cn } from '@/utils';
import { usePagination } from '@/hooks';
import * as PaginationPrimitive from './components';

interface PaginationProps
  extends React.ComponentProps<typeof PaginationPrimitive.Root> {
  totalRecords: number;
  siblingCount?: number;
}
export const Pagination = ({
  totalRecords = 0,
  siblingCount = 1,
  className,
  ...props
}: PaginationProps) => {
  const {
    pageNumber: currentPage,
    pageSize,
    getPageURL,
    handlePageNumber,
  } = usePagination();

  if (totalRecords === 0) return null;

  const totalPagesCount = Math.ceil(totalRecords / pageSize);
  const totalDisplayPages = 1 + siblingCount * 2;

  const startPage = Math.max(
    1,
    Math.min(
      currentPage - siblingCount,
      totalPagesCount - totalDisplayPages + 1,
    ),
  );
  const endPage = Math.min(totalPagesCount, startPage + totalDisplayPages - 1);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPagesCount) return;
    handlePageNumber(pageNumber);
  };

  const generateFeedback = () => {
    const initialItem = (currentPage - 1) * pageSize + 1;
    const finalItem = Math.min(initialItem + pageSize - 1, totalRecords);
    const entityName = totalRecords === 1 ? 'registro' : 'registros';
    return `${initialItem}-${finalItem} de ${totalRecords} ${entityName}`;
  };

  const renderPageLinks = () =>
    Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const pageNumber = startPage + index;
      return (
        <PaginationPrimitive.Item key={pageNumber}>
          <PaginationPrimitive.Link
            href={getPageURL(pageNumber)}
            isActive={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationPrimitive.Link>
        </PaginationPrimitive.Item>
      );
    });

  return (
    <PaginationPrimitive.Root
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    >
      <PaginationPrimitive.Feedback>
        {generateFeedback()}
      </PaginationPrimitive.Feedback>
      <PaginationPrimitive.Content>
        <PaginationPrimitive.Item isDisabled={currentPage === 1}>
          <PaginationPrimitive.First
            href={getPageURL(1)}
            onClick={() => handlePageChange(1)}
          />
        </PaginationPrimitive.Item>
        <PaginationPrimitive.Item isDisabled={currentPage === 1}>
          <PaginationPrimitive.Previous
            href={getPageURL(currentPage - 1)}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationPrimitive.Item>
        {renderPageLinks()}
        <PaginationPrimitive.Item isDisabled={!(currentPage < totalPagesCount)}>
          <PaginationPrimitive.Next
            href={getPageURL(currentPage + 1)}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationPrimitive.Item>
        <PaginationPrimitive.Item isDisabled={!(currentPage < totalPagesCount)}>
          <PaginationPrimitive.Last
            href={getPageURL(totalPagesCount)}
            onClick={() => handlePageChange(totalPagesCount)}
          />
        </PaginationPrimitive.Item>
      </PaginationPrimitive.Content>
    </PaginationPrimitive.Root>
  );
};
