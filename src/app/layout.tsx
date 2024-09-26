import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './providers';
import { Wrapper, Header, Sidebar, Content } from '@/layouts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lawyer Dashboard',
  description: 'Lawyer Dashboard Project',
};

// TODO: check body font family with Next font
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Wrapper.Root>
            <Header.Root>
              <Header.Title>Lawyer Dashboard</Header.Title>
            </Header.Root>
            <Sidebar.Root />
            <Content.Root>{children}</Content.Root>
          </Wrapper.Root>
        </ThemeProvider>
      </body>
    </html>
  );
}
