import * as React from 'react';
import { cn } from '@/lib';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto grid h-screen w-full max-w-7xl grid-cols-layout grid-rows-layout font-sans text-base font-normal',
        'bg-background text-foreground',
        className
      )}
      {...props}
    />
  );
};

export { Container };
