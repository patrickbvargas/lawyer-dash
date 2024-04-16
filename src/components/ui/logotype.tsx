import * as React from 'react';
import { Link } from '@/components';
import { cn } from '@/lib';

interface LogotypeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logotype = ({ className, ...props }: LogotypeProps) => {
  return (
    <div className={cn('text-center text-lg', className)} {...props}>
      <Link href='/'>LAWYER DASH</Link>
    </div>
  );
};

export { Logotype };
