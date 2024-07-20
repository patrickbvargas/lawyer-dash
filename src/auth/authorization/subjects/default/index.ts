import { z } from 'zod';
import { subjectActionSchema } from '@/schemas';

const defaultSubject = z.tuple([subjectActionSchema, z.literal('all')]);

export type DefaultSubject = z.TypeOf<typeof defaultSubject>;
