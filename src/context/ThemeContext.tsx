'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo, ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  readonly theme: Theme;
  readonly setTheme: (theme: Theme) => void;
  readonly toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'theme';

interface ThemeProviderProps {
  readonly children: ReactNode;
  readonly defaultTheme?: Theme;
}

function getInitialTheme(defaultTheme: Theme): Theme {
  if (globalThis.window === undefined) {
    return defaultTheme;
  }
  const storedTheme = globalThis.localStorage.getItem(STORAGE_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  return defaultTheme;
}

export function ThemeProvider({ children, defaultTheme = 'light' }: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme(defaultTheme));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const updateTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    globalThis.localStorage.setItem(STORAGE_KEY, newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      globalThis.localStorage.setItem(STORAGE_KEY, newTheme);
      return newTheme;
    });
  }, []);

  const contextValue = useMemo<ThemeContextType>(() => ({
    theme,
    setTheme: updateTheme,
    toggleTheme,
  }), [theme, updateTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
