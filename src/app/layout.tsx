import '@/app/globals.css';
import { Providers } from '@/app/provider';
import { Container } from '@/components';
import { Metadata } from '@/lib/next';
import { Inter } from 'next/font/google';

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
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
