import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_START_PAGE,
  PAGE_NUMBER_QUERY_PARAM,
  PAGE_SIZE_QUERY_PARAM,
} from '@/constants/pagination';

type Query = URLSearchParams | Record<string, string>;

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
    currentPage: getQueryParam(
      query,
      PAGE_NUMBER_QUERY_PARAM,
      DEFAULT_START_PAGE,
    ),
    pageSize: getQueryParam(
      query,
      PAGE_SIZE_QUERY_PARAM,
      DEFAULT_ITEMS_PER_PAGE,
    ),
  };
}
