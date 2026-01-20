'use client';

import { useState, useRef } from 'react';
import styles from './styles.module.css';
import type { TooltipProps } from './types';

export function Tooltip({
  children,
  content,
  position = 'top',
  delay = 200,
  className = '',
  disabled = false,
  fullSize = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const containerClasses = [
    styles.container,
    fullSize && styles.fullSize,
  ]
    .filter(Boolean)
    .join(' ');

  const tooltipClasses = [
    styles.tooltip,
    styles[position],
    isVisible && styles.visible,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={containerClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      {children}
      {!disabled && (
        <div
          className={tooltipClasses}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
          <div className={styles.arrow} />
        </div>
      )}
    </span>
  );
}
