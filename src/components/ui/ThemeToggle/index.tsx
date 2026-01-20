'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import styles from './styles.module.css';
import type { ThemeToggleProps } from './types';

const emptySubscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, getSnapshot, getServerSnapshot);

  // Evitar hydration mismatch: no renderizar hasta que el cliente esté montado
  if (!mounted) {
    return (
      <button
        className={`${styles.toggle} ${className || ''}`}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className={`${styles.icon} ${styles.sunIcon}`} />
        <Moon className={`${styles.icon} ${styles.moonIcon}`} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${styles.toggle} ${className || ''}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <Sun className={`${styles.icon} ${styles.sunIcon} ${theme === 'dark' ? styles.active : ''}`} />
      <Moon className={`${styles.icon} ${styles.moonIcon} ${theme === 'light' ? styles.active : ''}`} />
    </button>
  );
}
