import { z } from '@/lib/zod';

export const signInSchema = z.object({
  oab: z.string().min(1, { message: 'O campo de OAB é obrigatório' }),
  password: z.string().min(1, { message: 'O campo de senha é obrigatório' }),
});

export type SignInType = z.infer<typeof signInSchema>;
