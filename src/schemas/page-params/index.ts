import { z } from 'zod';

export const pageParamsSlugSchema = z.object({
  slug: z.string().min(1),
});
export type PageParamsSlugSchemaType = z.infer<typeof pageParamsSlugSchema>;

export const pageParamsIdSchema = z.object({
  id: z.string().min(1),
});
export type PageParamsIdSchemaType = z.infer<typeof pageParamsIdSchema>;
