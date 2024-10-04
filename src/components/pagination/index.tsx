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
    handlePageNumber,
  } = usePagination();

  if (totalRecords === 0) {
    return null;
  }

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

  const generateFeedback = () => {
    const initialItem = (currentPage - 1) * pageSize;
    const finalItem = initialItem + pageSize;
    return totalRecords === 1
      ? 'Exibindo 1 de 1'
      : `Exibindo ${initialItem + 1} - ${Math.min(finalItem, totalRecords)} de ${totalRecords}`;
  };

  const renderPageLinks = () =>
    Array.from({ length: endPage - startPage + 1 }).map((_, index) => {
      const pageNumber = startPage + index;
      return (
        <PaginationPrimitive.Item key={pageNumber}>
          <PaginationPrimitive.Link
            href="#"
            isActive={pageNumber === currentPage}
            onClick={() => handlePageNumber(pageNumber)}
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
            href="#"
            onClick={() => handlePageNumber(1)}
          />
        </PaginationPrimitive.Item>
        <PaginationPrimitive.Item isDisabled={currentPage === 1}>
          <PaginationPrimitive.Previous
            href="#"
            onClick={() => handlePageNumber(currentPage - 1)}
          />
        </PaginationPrimitive.Item>
        {renderPageLinks()}
        <PaginationPrimitive.Item isDisabled={!(currentPage < totalPagesCount)}>
          <PaginationPrimitive.Next
            href="#"
            onClick={() => handlePageNumber(currentPage + 1)}
          />
        </PaginationPrimitive.Item>
        <PaginationPrimitive.Item isDisabled={!(currentPage < totalPagesCount)}>
          <PaginationPrimitive.Last
            href="#"
            onClick={() => handlePageNumber(totalPagesCount)}
          />
        </PaginationPrimitive.Item>
      </PaginationPrimitive.Content>
    </PaginationPrimitive.Root>
  );
};
