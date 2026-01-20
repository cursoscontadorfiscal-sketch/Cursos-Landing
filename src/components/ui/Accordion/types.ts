import { ReactNode } from 'react';

export interface AccordionProps {
  /** Título principal del accordion (requerido) */
  title: string;
  /** Subtítulo opcional */
  subtitle?: string;
  /** Contenido del accordion (puede ser texto, listas, etc.) */
  children: ReactNode;
  /** Si el accordion está abierto por defecto */
  defaultOpen?: boolean;
  /** Clases CSS adicionales */
  className?: string;
  /** Callback cuando cambia el estado abierto/cerrado */
  onToggle?: (isOpen: boolean) => void;
}
