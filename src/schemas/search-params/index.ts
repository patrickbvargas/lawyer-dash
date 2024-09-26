import { z } from 'zod';
import {
  PAGE_NUMBER_ALIAS,
  PAGE_SIZE_ALIAS,
  PAGE_NUMBER_DEFAULT,
  PAGE_SIZE_DEFAULT,
  SEARCH_TERM_ALIAS,
  SEARCH_TERM_DEFAULT,
} from '@/constants';

const searchParamsBaseSchema = z.object({
  [PAGE_NUMBER_ALIAS]: z.coerce.number().default(PAGE_NUMBER_DEFAULT),
  [PAGE_SIZE_ALIAS]: z.coerce.number().default(PAGE_SIZE_DEFAULT),
  [SEARCH_TERM_ALIAS]: z.string().default(SEARCH_TERM_DEFAULT),
});

export const searchParamsFilterSchema = searchParamsBaseSchema
  .pick({
    [SEARCH_TERM_ALIAS]: true,
  })
  .transform((params) => ({ query: params[SEARCH_TERM_ALIAS] }));
export type SearchParamsFilterSchemaType = z.infer<
  typeof searchParamsFilterSchema
>;

export const searchParamsSchema = searchParamsBaseSchema.transform(
  (params) => ({
    pagination: {
      page: params[PAGE_NUMBER_ALIAS],
      size: params[PAGE_SIZE_ALIAS],
    },
    filters: {
      query: params[SEARCH_TERM_ALIAS],
    },
  }),
);
export type SearchParamsSchemaType = z.infer<typeof searchParamsSchema>;
