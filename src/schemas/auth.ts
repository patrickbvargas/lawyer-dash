import { z } from '@/lib/zod';

const signInSchema = z.object({
  oab: z.string().min(1, { message: 'O campo de OAB é obrigatório' }),
  password: z.string().min(1, { message: 'O campo de senha é obrigatório' }),
});

type SignInType = z.infer<typeof signInSchema>;

export { signInSchema, type SignInType };
