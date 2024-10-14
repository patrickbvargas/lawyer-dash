import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/utils';

interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Root = ({ className, ...props }: RootProps) => (
  <div
    className={cn('flex flex-col items-center gap-4 py-10', className)}
    {...props}
  />
);

interface ContentProps extends React.ComponentProps<typeof Image> {}
export const Content = ({ src, alt, ...props }: ContentProps) => {
  return <Image src={src} alt={alt} width={400} height={400} {...props} />;
};

interface AttributionProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}
export const Attribution = ({
  href,
  label,
  className,
  ...props
}: AttributionProps) => {
  return (
    <a
      className={cn('text-xs', 'text-sky-400', 'dark:text-sky-700', className)}
      target="_blank"
      href={href}
      {...props}
    >
      {label}
    </a>
  );
};
