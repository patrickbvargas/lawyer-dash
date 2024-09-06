'use client';
import { getPaginationParamsFromQuery } from '@/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  PAGE_NUMBER_QUERY_PARAM,
  PAGE_SIZE_QUERY_PARAM,
} from '@/constants/pagination';

export function usePagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const { currentPage, pageSize } = getPaginationParamsFromQuery(searchParams);

  const handlePageNumber = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(PAGE_NUMBER_QUERY_PARAM, pageNumber.toString());
    params.set(PAGE_SIZE_QUERY_PARAM, pageSize.toString());
    replace(`${pathname}?${params.toString()}`);
    console.log(`${pathname}?${params.toString()}`);
  };

  return { currentPage, pageSize, handlePageNumber };
}
