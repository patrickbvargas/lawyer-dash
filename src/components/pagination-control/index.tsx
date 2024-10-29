'use client';
import { cn } from '@/utils';
import { usePagination } from '@/hooks';
import { Pagination } from '@/components';

interface PaginationProps extends React.ComponentProps<typeof Pagination.Root> {
  totalRecords: number;
  siblingCount?: number;
}
export const PaginationControl = ({
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

  const isValidPageNumber = (pageNumber: number) =>
    pageNumber >= 1 && pageNumber <= totalPagesCount;

  const getPaginationPageURL = (pageNumber: number) => {
    return isValidPageNumber(pageNumber) ? getPageURL(pageNumber) : '#';
  };

  const handlePageChange = (pageNumber: number) => {
    if (isValidPageNumber(pageNumber)) handlePageNumber(pageNumber);
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
        <Pagination.Item key={pageNumber}>
          <Pagination.Link
            href={getPageURL(pageNumber)}
            isActive={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </Pagination.Link>
        </Pagination.Item>
      );
    });

  return (
    <Pagination.Root
      className={cn(
        'flex flex-col-reverse gap-3 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    >
      <Pagination.Feedback>{generateFeedback()}</Pagination.Feedback>
      <Pagination.Content>
        <Pagination.Item isDisabled={currentPage === 1}>
          <Pagination.First
            href={getPaginationPageURL(1)}
            onClick={() => handlePageChange(1)}
          />
        </Pagination.Item>
        <Pagination.Item isDisabled={currentPage === 1}>
          <Pagination.Previous
            href={getPaginationPageURL(currentPage - 1)}
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </Pagination.Item>
        {renderPageLinks()}
        <Pagination.Item isDisabled={!(currentPage < totalPagesCount)}>
          <Pagination.Next
            href={getPaginationPageURL(currentPage + 1)}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination.Item>
        <Pagination.Item isDisabled={!(currentPage < totalPagesCount)}>
          <Pagination.Last
            href={getPaginationPageURL(totalPagesCount)}
            onClick={() => handlePageChange(totalPagesCount)}
          />
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  );
};
