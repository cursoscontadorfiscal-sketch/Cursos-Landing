export interface FooterLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface FooterProps {
  readonly brandName?: string;
  readonly copyrightText?: string;
  readonly links?: readonly FooterLink[];
  readonly className?: string;
}
