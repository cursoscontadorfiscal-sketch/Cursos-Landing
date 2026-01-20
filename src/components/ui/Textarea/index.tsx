import { forwardRef, useId } from 'react';
import type { TextareaProps } from './types';
import styles from './styles.module.css';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      size = 'md',
      error,
      helperText,
      fullWidth = false,
      resize = false,
      className = '',
      id,
      rows = 4,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    const textareaClasses = [
      styles.textarea,
      styles[size],
      error && styles.error,
      fullWidth && styles.fullWidth,
      !resize && styles.noResize,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''}`}>
        {label && (
          <label htmlFor={textareaId} className={styles.label}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
          {...rest}
        />
        {error && (
          <span id={`${textareaId}-error`} className={styles.errorText}>
            {error}
          </span>
        )}
        {helperText && !error && (
          <span id={`${textareaId}-helper`} className={styles.helperText}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
