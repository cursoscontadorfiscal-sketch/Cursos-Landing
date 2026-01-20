import { ReactNode } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: ReactNode;
  content: string | ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  disabled?: boolean;
  fullSize?: boolean;
}
