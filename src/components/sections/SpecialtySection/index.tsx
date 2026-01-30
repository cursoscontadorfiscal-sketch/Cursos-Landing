import { FC } from "react";
import { Package, CreditCard, Check, ArrowRight } from "lucide-react";
import styles from "./styles.module.css";

const SERVICES = [
  { label: "Diagnóstico y estructuración fiscal para PYMES", price: "$3,000 – $8,000 MXN" },
  { label: "Optimización y revisión de CFDI 4.0", price: "$2,500 – $6,000 MXN" },
  { label: "Acompañamiento en Declaración Anual (Personas Morales)", price: "$5,000 – $15,000 MXN" },
  { label: "Definición de nicho + propuesta de valor del despacho", price: "$4,000 – $12,000 MXN" },
  { label: "Diseño de oferta de servicios contables", price: "$3,000 – $10,000 MXN" },
  { label: "Asesoría estratégica mensual para clientes recurrentes", price: "$2,500 – $7,000 MXN" },
];

const INCLUDES = [
  "Material de trabajo",
  "Constancia",
  "Seguimiento de dudas",
  "Contenido grabado",
];

const PAYMENT_METHODS = [
  "Suscripción mensual mediante la plataforma de Hotmart"
];

interface SpecialtySectionProps {
  className?: string;
}

export const SpecialtySection: FC<SpecialtySectionProps> = ({ className = "" }) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            ¡Esto no es una Membresía común!
            <br />
            Es una <span className={styles.highlight}>Formación</span> aplicada que eleva tu{" "}
            <span className={styles.highlightGreen}>valor</span> profesional.
          </h2>
          <p className={styles.subtitle}>
            Domina estos temas y capitaliza servicios de alto valor:
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {SERVICES.map((service) => (
            <div key={service.label} className={styles.serviceCard}>
              <span className={styles.serviceLabel}>{service.label}</span>
              <span className={styles.servicePrice}>{service.price}</span>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className={styles.highlightBanner}>
          <p className={styles.highlightText}>
            ¿Sabías que mejores servicios generan mejores honorarios?
          </p>
        </div>

        {/* Repeat Text */}
        <p className={styles.repeatText}>
          A través de esta membresía, tendras todo lo necesario para comenzar a trabajar.
        </p>

        {/* Info Cards */}
        <div className={styles.infoGrid}>
          {/* Includes Card */}
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>
              <Package size={24} className={styles.infoCardIcon} />
              Incluye:
            </h3>
            <ul className={styles.infoList}>
              {INCLUDES.map((item) => (
                <li key={item} className={styles.infoListItem}>
                  <Check size={18} className={styles.checkIcon} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods Card */}
          <div className={styles.infoCard}>
            <h3 className={styles.infoCardTitle}>
              <CreditCard size={24} className={styles.infoCardIcon} />
              Formas de pago:
            </h3>
            <ul className={styles.infoList}>
              {PAYMENT_METHODS.map((method) => (
                <li key={method} className={styles.infoListItem}>
                  <ArrowRight size={18} className={styles.arrowIcon} />
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
