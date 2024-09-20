'use client';
import { useUrlSearchParams } from '@/hooks';
import {
  PAGE_NUMBER_ALIAS,
  PAGE_NUMBER_DEFAULT,
  PAGE_SIZE_ALIAS,
  PAGE_SIZE_DEFAULT,
} from '@/constants/pagination';

export function usePagination() {
  const { searchParams, handleSearchParams } = useUrlSearchParams();

  const pageNumber =
    Number(searchParams.get(PAGE_NUMBER_ALIAS)) || PAGE_NUMBER_DEFAULT;
  const pageSize =
    Number(searchParams.get(PAGE_SIZE_ALIAS)) || PAGE_SIZE_DEFAULT;

  const handlePageNumber = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE_NUMBER_ALIAS, pageNumber.toString());
    params.set(PAGE_SIZE_ALIAS, pageSize.toString());
    handleSearchParams(params);
  };

  return { pageNumber, pageSize, handlePageNumber };
}
