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
          <Wrapper>
            <div className="border-r-2 border-neutral-800">
              <Header>Header</Header>
              <Sidebar>Sidebar</Sidebar>
            </div>
            <Content>{children}</Content>
          </Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
