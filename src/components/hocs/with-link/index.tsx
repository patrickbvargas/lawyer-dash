import * as React from 'react';
import { Link } from '@/components';

interface WithLinkProps extends React.ComponentProps<typeof Link> {}
export const WithLink = ({ href, children, ...props }: WithLinkProps) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};