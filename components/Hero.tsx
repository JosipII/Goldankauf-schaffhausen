'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/lang-context'
import styles from './Hero.module.css'

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })
}

function nextUpdate(iso: string): string {
  const next = new Date(new Date(iso).getTime() + 8 * 60 * 60 * 1000)
  return next.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })
}

export default function Hero() {
  const { t } = useLang()
  const [price, setPrice] = useState<string>('—')
  const [updatedAt, setUpdatedAt] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/gold-price')
      .then(r => r.json())
      .then(data => {
        if (data.price) {
          setPrice(data.price.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
        }
        if (data.updatedAt) setUpdatedAt(data.updatedAt)
      })
      .catch(() => {})
  }, [])

  const PriceMeta = () => updatedAt ? (
    <div className={styles.priceMeta}>
      <span>{t.priceStand}: {formatTime(updatedAt)}</span>
      <span>{t.priceNext}: {nextUpdate(updatedAt)}</span>
    </div>
  ) : (
    <div className={styles.priceMeta}><span>— alle 8h</span></div>
  )

  const PriceContent = () => (
    <>
      <div className={styles.priceLabel}>
        <span className={styles.liveDot} />
        {t.priceLabel}
      </div>
      <div className={styles.priceValue}>{price}</div>
      <div className={styles.priceUnit}>{t.priceUnit}</div>
      <PriceMeta />
    </>
  )

  return (
    <section className={styles.hero}>
      <div className={styles.watermark}>Au</div>
      <div className={styles.content}>
        <div className={styles.overline}>{t.heroOverline}</div>
        <h1 className={styles.h1}>
          {t.heroLine1}<br />
          {t.heroLine2}<em>{t.heroEm}</em>
        </h1>
        <p className={styles.sub}>{t.heroSub1}</p>
        <p className={styles.sub}>{t.heroSub2}</p>
        <div className={styles.actions}>
          <a className={styles.btnGold} href="#kontakt">{t.heroCta}</a>
        </div>
        <div className={styles.priceInline}>
          <div className={styles.priceInlineLabel}>
            <span className={styles.liveDot} />
            {t.priceLabel}
          </div>
          <div className={styles.priceInlineValue}>{price}</div>
          <div className={styles.priceInlineUnit}>{t.priceUnit}</div>
          <PriceMeta />
        </div>
      </div>
      <div className={styles.priceCard}>
        <PriceContent />
      </div>
    </section>
  )
}
