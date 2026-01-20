'use client';

import { FC, useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import styles from './styles.module.css';

interface ContactSectionProps {
  className?: string;
}

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT ||
  'https://script.google.com/macros/s/AKfycbzUCpQQzpMVmzZANAIfEqiMrw547UGVYBpuU1-oICN8VMJPSj9bgzp9DXjDHK6igWlecA/exec';

export const ContactSection: FC<ContactSectionProps> = ({ className = '' }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className={`${styles.section} ${className}`}>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Info Side */}
          <div className={styles.infoSide}>
            <div>
              <h2 className={styles.infoTitle}>
                ¿Aún tienes alguna duda que te quita el sueño?
              </h2>

              <p className={styles.infoDescription}>
                Escríbenos. Como colegas, entendemos la importancia de estar
                seguros antes de dar un paso importante.
              </p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail size={18} />
                  </div>
                  <span className={styles.contactText}>
                    valledoradocolegiodecontadores@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className={styles.formSide}>
            <h3 className={styles.formTitle}>Hablemos de colega a colega</h3>

            {/* Success Message */}
            {isSubmitted && (
              <div className={styles.successFade}>
                <p
                  className={styles.successMessage}
                  role="status"
                  aria-live="polite"
                >
                  Gracias, tu mensaje fue enviado correctamente. Te
                  responderemos a la brevedad.
                </p>

                <Button
                  style={{ marginTop: '1rem' }}
                  variant="secondary"
                  size="md"
                  onClick={resetForm}
                >
                  Enviar otro mensaje
                </Button>
              </div>
            )}

            {/* Form */}
            {!isSubmitted && (
              <>
                <iframe
                  name="contact-hidden-iframe"
                  style={{ display: 'none' }}
                  onLoad={() => {
                    if (isSubmitting) {
                      setIsSubmitting(false);
                      setIsSubmitted(true);
                    }
                  }}
                />

                <form
                  className={styles.formFade}
                  action={FORM_ENDPOINT}
                  method="POST"
                  target="contact-hidden-iframe"
                  onSubmit={() => setIsSubmitting(true)}
                >
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ display: 'none' }}
                  />

                  <div className={styles.formRow}>
                    <Input
                      name="name"
                      label="Tu nombre"
                      placeholder="Ej. Cont. Sofía García"
                      autoComplete="name"
                      required
                      fullWidth
                    />

                    <Input
                      name="email"
                      label="Tu correo"
                      type="email"
                      placeholder="sofia@ejemplo.com"
                      autoComplete="email"
                      required
                      fullWidth
                    />
                  </div>

                  <Input
                    name="phone"
                    label="Teléfono"
                    type="tel"
                    placeholder="Ej. 55 1234 5678"
                    autoComplete="tel"
                    required
                    fullWidth
                  />

                  <Textarea
                    name="message"
                    label="¿En qué podemos apoyarte?"
                    placeholder="Cuéntanos tu duda con el mayor detalle posible"
                    rows={4}
                    minLength={10}
                    maxLength={1000}
                    required
                    fullWidth
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    style={{ marginTop: '1rem' }}
                  >
                    {isSubmitting ? 'Enviando…' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export type { ContactSectionProps };
