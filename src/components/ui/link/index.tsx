import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/utils';

export const CustomLink = ({
  className,
  ...props
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      className={cn(
        'rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  );
};
