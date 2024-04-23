import { React } from '@/lib/react';
import { Content, Header, Sidebar } from '@/layout';

export default function LoggedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid grid-cols-layout grid-rows-layout overflow-hidden'>
      <Header />
      <Sidebar className='row-span-full' />
      <Content>{children}</Content>
    </div>
  );
}
