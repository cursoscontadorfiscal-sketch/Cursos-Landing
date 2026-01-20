import { ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary-outline'
  | 'secondary-outline'
  | 'tertiary-outline';

export type IconPosition = 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  iconName?: LucideIcon;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
}
