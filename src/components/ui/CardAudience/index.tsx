import { FC } from "react";
import { CheckCircle, XCircle, Check, X } from "lucide-react";
import type { CardAudienceProps } from "./types";
import styles from "./styles.module.css";

export const CardAudience: FC<CardAudienceProps> = ({
  variant,
  title,
  items,
  className = "",
}) => {
  const isPositive = variant === "positive";
  const TitleIcon = isPositive ? CheckCircle : XCircle;
  const ItemIcon = isPositive ? Check : X;

  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      <h3 className={styles.title}>
        <TitleIcon size={24} className={styles.titleIcon} />
        {title}
      </h3>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            <ItemIcon size={20} className={styles.itemIcon} />
            <span className={styles.itemText}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export type { CardAudienceProps } from "./types";
