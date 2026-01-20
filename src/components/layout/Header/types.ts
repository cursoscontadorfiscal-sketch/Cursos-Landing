export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface HeaderProps {
  readonly brandName?: string;
  readonly navItems?: readonly NavItem[];
  readonly className?: string;
}
