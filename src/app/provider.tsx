'use client';
import { React } from '@/lib/react';
import { NextUIProvider } from '@/lib/next-ui';
import { NextThemeProvider } from '@/lib/next-theme';
import { NextAuthProvider } from '@/lib/next-auth/client';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <NextAuthProvider>
      <NextUIProvider>
        <NextThemeProvider attribute='class' defaultTheme='dark'>
          {children}
        </NextThemeProvider>
      </NextUIProvider>
    </NextAuthProvider>
  );
};

export { Providers };
