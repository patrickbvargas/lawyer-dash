'use client';
import * as React from 'react';
import * as NextLink from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkProps
  extends NextLink.LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

const Link = ({ href, ...props }: LinkProps) => {
  return <NextLink.default href={href} {...props} />;
};

const NavLink = ({ href, ...props }: LinkProps) => {
  const pathname = usePathname();
  return (
    <NextLink.default href={href} data-active={pathname === href} {...props} />
  );
};

export { Link, NavLink };
