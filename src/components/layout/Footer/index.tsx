import { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import type { FooterProps } from './types';
import styles from './styles.module.css';

const CURRENT_YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { label: 'Membresía', href: '#membresia' },
  { label: 'Qué incluye', href: '#precio' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const Footer: FC<FooterProps> = ({
  brandName = 'Colegio de Contadores Valle Dorado',
  copyrightText,
  className = '',
}) => {
  const defaultCopyright = `© ${CURRENT_YEAR} ${brandName}. Todos los derechos reservados.`;

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.dots} aria-hidden="true" />

      <div className={styles.container}>
        {/* Top grid */}
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.brand}>
            <NextLink href="/" className={styles.logoLink}>
              <Image
                src="/logo.jpg"
                alt={brandName}
                width={100}
                height={40}
                className={styles.logo}
              />
            </NextLink>
            <p className={styles.tagline}>
              Formación continua para contadores profesionales que quieren destacar.
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.navCol}>
            <span className={styles.navTitle}>Navegación</span>
            <nav className={styles.navLinks}>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className={styles.ctaCol}>
            <p className={styles.ctaHeading}>¿Listo para crecer?</p>
            <p className={styles.ctaText}>
              Únete a más de 150 contadores que ya están avanzando.
            </p>
            <a href="#precio" className={styles.ctaButton}>
              Ver membresía
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {copyrightText ?? defaultCopyright}
          </p>
          <p className={styles.bottomRight}>
            Profesionales al servicio de profesionales.
          </p>
        </div>
      </div>
    </footer>
  );
};

export type { FooterProps, FooterLink } from './types';
