import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Providers } from '@/app/providers';
import { Container } from '@/components';
import { Content, Header, Sidebar } from '@/layout';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='pt-BR' suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Container>
            <Header />
            <Sidebar className='row-span-full' />
            <Content>{children}</Content>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
