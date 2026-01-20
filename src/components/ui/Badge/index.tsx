import { FC } from "react";
import type { BadgeProps } from "./types";
import styles from "./styles.module.css";

export const Badge: FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  showDot = false,
  animated = true,
  bgColor,
  txtColor,
  className = "",
  style,
  ...rest
}) => {
  const badgeClasses = [
    styles.badge,
    styles[size],
    !bgColor && styles[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const customStyles = {
    ...style,
    ...(bgColor && { backgroundColor: bgColor }),
    ...(txtColor && { color: txtColor }),
  };

  return (
    <span className={badgeClasses} style={customStyles} {...rest}>
      {showDot && (
        <span className={styles.dot}>
          {animated && <span className={styles.dotPing} />}
          <span className={styles.dotCore} />
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </span>
  );
};

export type { BadgeProps, BadgeVariant, BadgeSize } from "./types";
