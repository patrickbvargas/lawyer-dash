import { React } from '@/lib/react';
import { NextUIProvider } from '@/lib/next-ui';
import { NextThemeProvider } from '@/lib/next-theme';
import { NextAuthProvider } from '@/lib/next-auth/client';
import { getSessionInfo } from '@/lib/next-auth';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = async ({ children }: ProvidersProps) => {
  const session = await getSessionInfo();
  return (
    <NextAuthProvider session={session}>
      <NextUIProvider>
        <NextThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </NextThemeProvider>
      </NextUIProvider>
    </NextAuthProvider>
  );
};

export { Providers };
