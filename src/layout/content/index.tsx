import { cn } from '@/utils';
import { React } from '@/lib/react';

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
