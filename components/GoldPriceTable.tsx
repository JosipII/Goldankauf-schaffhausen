'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/lang-context'
import styles from './GoldPriceTable.module.css'

const KARATS = [
  { key: 'tableRow18', fineness: 0.75 },
  { key: 'tableRow14', fineness: 0.585 },
  { key: 'tableRow9',  fineness: 0.375 },
] as const

function fmt(val: number): string {
  return val.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

interface GoldPriceTableProps {
  initialPrice?: number | null
  initialUpdatedAt?: string | null
}

export default function GoldPriceTable({ initialPrice = null, initialUpdatedAt = null }: GoldPriceTableProps) {
  const { lang, t } = useLang()
  const [basePrice, setBasePrice] = useState<number | null>(initialPrice)
  const [updatedAt, setUpdatedAt] = useState<string | null>(initialUpdatedAt)

  useEffect(() => {
    fetch('/api/gold-price')
      .then(r => r.json())
      .then(data => {
        if (data.price) setBasePrice(data.price)
        if (data.updatedAt) setUpdatedAt(data.updatedAt)
      })
      .catch(() => {})
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.overline}>{t.tableLabel}</div>
      <h2 className={styles.h2}>{t.tableH2}</h2>
      {basePrice === null ? (
        <p className={styles.loading}>— —</p>
      ) : (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>{t.tablePurity}</th>
                <th>{t.tableCol1g}</th>
              </tr>
            </thead>
            <tbody>
              {KARATS.map(({ key, fineness }) => {
                const perG = basePrice * fineness
                return (
                  <tr key={key}>
                    <td>{t[key]}</td>
                    <td><span className={styles.currency}>CHF</span> {fmt(perG)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          {updatedAt && (
            <p className={styles.updatedAt}>
              {t.lastUpdated}: {new Date(updatedAt).toLocaleString(lang === 'de' ? 'de-CH' : 'en-GB', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </p>
          )}
        </div>
      )}
    </section>
  )
}
