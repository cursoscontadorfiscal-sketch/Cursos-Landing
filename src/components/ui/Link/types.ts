import { ComponentPropsWithoutRef } from 'react';
import NextLink from 'next/link';
import { LucideIcon } from 'lucide-react';

export type LinkSize = 'sm' | 'md' | 'lg';

export type LinkVariant =
  | 'nav'
  | 'inline'
  | 'subtle'
  | 'primary'
  | 'secondary';

export type IconPosition = 'left' | 'right';

export interface LinkProps extends ComponentPropsWithoutRef<typeof NextLink> {
  children?: React.ReactNode;
  iconName?: LucideIcon;
  iconPosition?: IconPosition;
  size?: LinkSize;
  variant?: LinkVariant;
  className?: string;
  external?: boolean;
}
