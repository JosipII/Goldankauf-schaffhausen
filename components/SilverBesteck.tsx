'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/lang-context'
import styles from './SilverBesteck.module.css'

export default function SilverBesteck({ initialPrice = null }: { initialPrice?: number | null }) {
  const { t } = useLang()
  const [price, setPrice] = useState(initialPrice)

  useEffect(() => {
    fetch('/api/silverware-price')
      .then(response => response.json())
      .then(data => { if (typeof data.price === 'number') setPrice(data.price) })
      .catch(() => {})
  }, [])
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.label}>{t.silverLabel}</div>
        <h2 className={styles.h2}>{t.silverH2}</h2>
        <p className={styles.body}>{t.silverBody}</p>
        <p className={styles.items}>{t.silverItems}</p>
      </div>
      <div className={styles.priceBox}>
        <span className={styles.priceNum}>{price === null ? '—' : price.toLocaleString('de-CH', { maximumFractionDigits: 2 })}</span>
        <span className={styles.priceUnit}>{t.silverUnit}</span>
        <span className={styles.priceNote}>{t.silverNote}</span>
      </div>
    </section>
  )
}
