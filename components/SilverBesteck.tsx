'use client'
import { useLang } from '@/lib/lang-context'
import styles from './SilverBesteck.module.css'

export default function SilverBesteck() {
  const { t } = useLang()
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.label}>{t.silverLabel}</div>
        <h2 className={styles.h2}>{t.silverH2}</h2>
        <p className={styles.body}>{t.silverBody}</p>
        <p className={styles.items}>{t.silverItems}</p>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.priceNum}>{t.silverPrice}</span>
        <span className={styles.priceUnit}>{t.silverUnit}</span>
        <span className={styles.priceNote}>{t.silverNote}</span>
      </div>
    </section>
  )
}
