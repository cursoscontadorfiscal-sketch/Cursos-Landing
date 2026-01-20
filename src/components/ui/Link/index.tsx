import { forwardRef } from 'react';
import NextLink from 'next/link';
import type { LinkProps } from './types';
import styles from './styles.module.css';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      iconName: Icon,
      iconPosition = 'right',
      size = 'md',
      variant = 'nav',
      className = '',
      external = false,
      href,
      ...rest
    },
    ref
  ) => {
    const linkClasses = [
      styles.link,
      styles[size],
      styles[variant],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const externalProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <NextLink
        ref={ref}
        href={href}
        className={linkClasses}
        {...externalProps}
        {...rest}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={styles.icon} aria-hidden="true" />
        )}
        {children && <span className={styles.text}>{children}</span>}
        {Icon && iconPosition === 'right' && (
          <Icon className={styles.icon} aria-hidden="true" />
        )}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';
