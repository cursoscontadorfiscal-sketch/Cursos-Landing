import { forwardRef } from 'react';
import type { ButtonProps } from './types';
import styles from './styles.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      iconName: Icon,
      iconPosition = 'left',
      size = 'md',
      variant = 'primary',
      className = '',
      disabled = false,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const buttonClasses = [
      styles.button,
      styles[size],
      styles[variant],
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        {...rest}
      >
        {Icon && iconPosition === 'left' && (
          <Icon className={styles.icon} aria-hidden="true" />
        )}
        {children && <span className={styles.text}>{children}</span>}
        {Icon && iconPosition === 'right' && (
          <Icon className={styles.icon} aria-hidden="true" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
