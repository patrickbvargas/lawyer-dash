import * as React from 'react';
import { cn } from '@/utils';

export const Content = ({
  className,
  ...props
}: React.ComponentProps<'main'>) => (
  <main className={cn('h-full overflow-hidden', className)} {...props} />
);
