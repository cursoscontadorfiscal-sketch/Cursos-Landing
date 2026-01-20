import { HTMLAttributes } from "react";

export type BadgeVariant = "primary" | "secondary" | "success" | "warning" | "error";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  readonly children: React.ReactNode;
  readonly variant?: BadgeVariant;
  readonly size?: BadgeSize;
  readonly showDot?: boolean;
  readonly animated?: boolean;
  readonly bgColor?: string;
  readonly txtColor?: string;
  readonly className?: string;
}
