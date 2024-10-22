'use client';
import { useUrlSearchParams } from '@/hooks';
import {
  PAGE_NUMBER_ALIAS,
  PAGE_NUMBER_DEFAULT,
  PAGE_SIZE_ALIAS,
  PAGE_SIZE_DEFAULT,
} from '@/constants';

export function usePagination() {
  const { pathname, searchParams, handleSearchParams } = useUrlSearchParams();
  const pageNumber = Math.max(
    Number(searchParams.get(PAGE_NUMBER_ALIAS)) || PAGE_NUMBER_DEFAULT,
    1,
  );
  const pageSize = Math.max(
    Number(searchParams.get(PAGE_SIZE_ALIAS)) || PAGE_SIZE_DEFAULT,
    1,
  );

  const buildPaginationParams = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE_NUMBER_ALIAS, pageNumber.toString());
    params.set(PAGE_SIZE_ALIAS, pageSize.toString());
    return params;
  };

  const getPageURL = (pageNumber: number) => {
    const params = buildPaginationParams(pageNumber);
    return `${pathname}?${params.toString()}`;
  };

  const handlePageNumber = (pageNumber: number) => {
    const params = buildPaginationParams(pageNumber);
    handleSearchParams(params);
  };

  return { pageNumber, pageSize, handlePageNumber, getPageURL };
}
