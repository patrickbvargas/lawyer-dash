import { z } from 'zod';

export const pageParamsSchema = z.object({
  slug: z.string().min(1),
});
export type PageParamsSchemaType = z.infer<typeof pageParamsSchema>;
