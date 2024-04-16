import * as React from 'react';
import { cn } from '@/lib';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content = ({ className, ...props }: ContentProps) => {
  return (
    <main
      className={cn('flex h-full overflow-hidden px-8 pb-8 pt-2', className)}
      {...props}
    />
  );
};

export { Content };
