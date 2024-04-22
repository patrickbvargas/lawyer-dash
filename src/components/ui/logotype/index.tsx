import { cn } from '@/utils';
import { React } from '@/lib/react';
import { Link } from '@/components';

interface LogotypeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Logotype = ({ className, ...props }: LogotypeProps) => {
  return (
    <div className={cn('text-center text-lg', className)} {...props}>
      <Link href='/'>LAWYER DASH</Link>
    </div>
  );
};

export { Logotype };
