import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import { Toaster } from '@/components';
import { Wrapper, Header, Sidebar, Content } from '@/layouts';

const fontFamily = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lawyer Dashboard',
  description: 'Lawyer Dashboard Project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${fontFamily.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper className="flex flex-col sm:grid sm:grid-cols-layout sm:grid-rows-layout">
            <Header className="sm:row-start-1" />
            <Sidebar className="order-last sm:row-start-2" />
            <Content className="sm:row-span-full">{children}</Content>
            <Toaster />
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
