import { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from '@/components/ui/Link';
import type { FooterProps } from './types';
import styles from './styles.module.css';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: FC<FooterProps> = ({
  brandName = 'Colegio de Contadores Valle Dorado',
  copyrightText,
  links,
  className = '',
}) => {
  const defaultCopyright = `© ${CURRENT_YEAR} ${brandName} Digital. Profesionales al servicio de profesionales.`;

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand / Logo */}
          <NextLink href="/" className={styles.brand}>
            <Image
              src="/logo.jpg"
              alt={brandName}
              width={100}
              height={40}
              className={styles.brandLogo}
            />
          </NextLink>

          {/* Links (optional) */}
          {links && links.length > 0 && (
            <nav className={styles.links}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="subtle"
                  size="sm"
                  className={styles.link}
                  external={link.external}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          {/* Copyright */}
          <p className={styles.copyright}>
            {copyrightText ?? defaultCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export type { FooterProps, FooterLink } from './types';
