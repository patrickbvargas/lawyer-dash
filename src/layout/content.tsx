import * as React from 'react';
import { cn } from '@/lib';

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const Content = ({ className, ...props }: ContentProps) => {
  return (
    <main
      className={cn('flex h-full px-8 py-2 overflow-hidden', className)}
      {...props}
    />
  );
};

export { Content };
