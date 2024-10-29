import * as React from 'react';
import { cn } from '@/utils';
import { Image, Link } from '@/components';

export const Root = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col items-center gap-4 py-10', className)}
    {...props}
  />
);

export const Content = ({
  src,
  alt,
  ...props
}: React.ComponentProps<typeof Image>) => {
  return <Image src={src} alt={alt} width={400} height={400} {...props} />;
};

interface AttributionProps extends React.ComponentProps<typeof Link> {
  label: string;
}
export const Attribution = ({
  href,
  label,
  className,
  ...props
}: AttributionProps) => {
  return (
    <Link
      className="text-xs p-2 text-link"
      target="_blank"
      href={href}
      prefetch={false}
      {...props}
    >
      {label}
    </Link>
  );
};
