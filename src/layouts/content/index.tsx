import * as React from 'react';
import { cn } from '@/utils';

interface ContentProps extends React.ComponentProps<'main'> {}
export const Content = ({ className, ...props }: ContentProps) => (
  <main className={cn('h-full overflow-hidden', className)} {...props} />
);
