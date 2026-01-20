"use client";

import {useState, useRef, useEffect} from "react";
import {ChevronDown} from "lucide-react";
import type {AccordionProps} from "./types";
import styles from "./styles.module.css";

export function Accordion({
  title,
  subtitle,
  children,
  defaultOpen = false,
  className = "",
  onToggle,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Actualizar la altura del contenedor cuando cambia isOpen
  useEffect(() => {
    const content = contentRef.current;
    const inner = innerRef.current;

    if (!content || !inner) return;

    if (isOpen) {
      // Abriendo: establecer altura al scrollHeight del contenido interno
      const height = inner.scrollHeight;
      content.style.height = `${height}px`;
    } else {
      // Cerrando: primero establecer la altura actual explícitamente
      const height = inner.scrollHeight;
      content.style.height = `${height}px`;

      // Forzar reflow
      content.offsetHeight;

      // Luego animar a 0
      content.style.height = "0px";
    }
  }, [isOpen]);

  // Manejar altura inicial si está abierto por defecto
  useEffect(() => {
    const content = contentRef.current;
    const inner = innerRef.current;

    if (defaultOpen && content && inner) {
      content.style.height = `${inner.scrollHeight}px`;
    }
  }, [defaultOpen]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      <button
        type="button"
        className={styles.header}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
      >
        <div className={styles.headerText}>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </div>
        <ChevronDown
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        ref={contentRef}
        className={styles.contentWrapper}
        aria-hidden={!isOpen}
      >
        <div ref={innerRef} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

Accordion.displayName = "Accordion";
