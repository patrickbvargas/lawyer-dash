'use client';
import { React } from '@/lib/react';
import * as NextLink from 'next/link';
import { usePathname } from '@/lib/next/client';

interface LinkProps
  extends NextLink.LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

// TODO: fix
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
