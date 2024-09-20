'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function useUrlSearchParams() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearchParams = (params: URLSearchParams) => {
    replace(`${pathname}?${params.toString()}`);
  };

  return { searchParams, handleSearchParams };
}
