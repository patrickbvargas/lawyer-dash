import { nextAuth } from '@/lib/next-auth';

interface UserAuth {
  id: string;
  oabNumber: string;
  fullName: string;
  remunerationPercent: number;
  role: string;
}

declare module 'next-auth' {
  interface Session {
    user: UserAuth;
  }
  interface User extends UserAuth {}
}

declare module 'next-auth/jwt' {
  interface JWT extends UserAuth {}
}
