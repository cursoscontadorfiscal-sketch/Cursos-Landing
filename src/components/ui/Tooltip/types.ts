import { CSSProperties, ReactNode } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: ReactNode;
  content: string | ReactNode;
  position?: TooltipPosition;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  fullSize?: boolean;
}
