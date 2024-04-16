'use client';
import * as React from 'react';
import { NextUIProvider, NextThemeProvider } from '@/contexts';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
};

export { Providers };
