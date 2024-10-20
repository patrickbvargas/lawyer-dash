import * as React from 'react';
import Link from 'next/link';

interface CustomLinkProps extends React.ComponentProps<typeof Link> {}
export const CustomLink = ({ ...props }: CustomLinkProps) => {
  return <Link className="rounded-lg" {...props} />;
};
