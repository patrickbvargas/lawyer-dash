import { cn } from '@/utils';
import { React } from '@/lib/react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = ({ className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto grid h-screen w-full max-w-7xl font-sans text-base font-normal',
        'bg-background text-foreground',
        className
      )}
      {...props}
    />
  );
};

export { Container };
