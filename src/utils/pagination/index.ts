import {
  PAGE_SIZE_DEFAULT,
  PAGE_NUMBER_DEFAULT,
  PAGE_NUMBER_ALIAS,
  PAGE_SIZE_ALIAS,
} from '@/constants/pagination';

type Query = URLSearchParams | Record<string, string>;

// TODO: refactor
function getQueryParam(query: Query, key: string, defaultValue: number) {
  if (query instanceof URLSearchParams) {
    const value = query.get(key);
    return value ? Number(value) : defaultValue;
  } else {
    const value = query[key];
    return value ? Number(value) : defaultValue;
  }
}

export function getPaginationParamsFromQuery(query: Query) {
  return {
    currentPage: getQueryParam(query, PAGE_NUMBER_ALIAS, PAGE_NUMBER_DEFAULT),
    pageSize: getQueryParam(query, PAGE_SIZE_ALIAS, PAGE_SIZE_DEFAULT),
  };
}
