import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, cloneElement } from 'react';

interface ActivelLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest}: ActivelLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href 
    ? activeClassName 
    : '';

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}