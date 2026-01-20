'use client';

import { FC, useState, useCallback } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Link } from '@/components/ui/Link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import type { HeaderProps, NavItem } from './types';
import styles from './styles.module.css';

const DEFAULT_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Inicio', href: '#top' },
  { label: 'El Curso', href: '#curso-destacado' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const Header: FC<HeaderProps> = ({
  brandName = 'Colegio de Contadores Valle Dorado',
  navItems = DEFAULT_NAV_ITEMS,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const handleNavClick = useCallback(() => {
    closeMobileMenu();
  }, [closeMobileMenu]);

  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <div className={styles.container}>
          {/* Brand / Logo */}
          <a href="#top" className={styles.brand}>
            <Image
              src="/logo.jpg"
              alt={brandName}
              width={120}
              height={48}
              className={styles.brandLogo}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                variant="nav"
                size="md"
                className={styles.navLink}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className={styles.actions}>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              className={styles.menuButton}
              onClick={openMobileMenu}
              aria-label="Abrir menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacion"
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileMenuTitle}>Menu</span>
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeMobileMenu}
            aria-label="Cerrar menu"
          >
            <X className={styles.closeIcon} />
          </button>
        </div>

        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={handleNavClick}
            >
              {item.label}
            </NextLink>
          ))}
        </nav>

        <div className={styles.mobileMenuFooter}>
          <div className={styles.mobileThemeRow}>
            <span className={styles.mobileThemeLabel}>Tema</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export type { HeaderProps, NavItem } from './types';
