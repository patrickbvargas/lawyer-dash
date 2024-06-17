import { z } from 'zod';

export const subjectTypeName = z.union([
  z.literal('Lawyer'),
  z.literal('Client'),
  z.literal('Contract'),
  z.literal('Revenue'),
  z.literal('Fee'),
  z.literal('Remuneration'),
]);
