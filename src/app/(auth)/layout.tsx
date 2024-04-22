import { React } from '@/lib/react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='flex size-full place-content-center'>
      {children}
    </section>
  );
}
