import { forwardRef, useId } from 'react';
import type { InputProps } from './types';
import styles from './styles.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'md',
      error,
      helperText,
      fullWidth = false,
      className = '',
      id,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const inputClasses = [
      styles.input,
      styles[size],
      error && styles.error,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...rest}
        />
        {error && (
          <span id={`${inputId}-error`} className={styles.errorText}>
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${inputId}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
