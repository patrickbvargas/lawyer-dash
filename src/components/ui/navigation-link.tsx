'use client';
import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

const NavigationLink = ({ href, ...props }: NavigationLinkProps) => {
  const pathname = usePathname();

  return <Link href={href} data-active={pathname === href} {...props} />;
};

export { NavigationLink };
