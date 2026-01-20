import { FC } from "react";
import { Package, CreditCard, Check, ArrowRight } from "lucide-react";
import styles from "./styles.module.css";

const SERVICES = [
  { label: "Alta y diagnóstico fiscal", price: "$3,000 – $7,000" },
  { label: "Análisis PF vs PM", price: "$2,500 – $6,000" },
  { label: "Revisión de ingresos y momentos de acumulación", price: "$3,000 – $8,000" },
  { label: "Planeación de deducciones autorizadas", price: "$3,500 – $9,000" },
  { label: "Soporte de materialidad y razón de negocios", price: "$4,000 – $12,000" },
  { label: "Deducción por estimativas e IVA en construcción", price: "$5,000 – $15,000+" },
];

const INCLUDES = [
  "Material de trabajo",
  "Constancia",
  "Seguimiento de dudas",
  "4h contenido grabado",
];

const PAYMENT_METHODS = [
  "Transferencia",
  "Depósito (OXXO/SPIN)",
  "Tarjeta de crédito (Mercado Pago)",
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
            ¡Esto no es solo un Taller!
            <br />
            Es una <span className={styles.highlight}>especialidad fiscal</span> que puedes convertir en{" "}
            <span className={styles.highlightGreen}>servicios bien pagados</span> durante todo el 2026.
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
            ¿Sabías que puedes ganar de $50,000 a $136,000 MXN con un solo cliente constructor?
          </p>
        </div>

        {/* Repeat Text */}
        <p className={styles.repeatText}>
          Y esto lo puedes repetir con 3, 5, 10 o más constructoras durante el año fiscal
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
