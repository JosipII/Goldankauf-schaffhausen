'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/lang-context'
import styles from './GoldPriceTable.module.css'

const TROY_OZ_TO_G = 31.1035

const KARATS = [
  { key: 'tableRow24', fineness: 1.0 },
  { key: 'tableRow18', fineness: 0.75 },
  { key: 'tableRow14', fineness: 0.585 },
  { key: 'tableRow9',  fineness: 0.375 },
] as const

function fmt(val: number): string {
  return val.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function GoldPriceTable() {
  const { t } = useLang()
  const [basePrice, setBasePrice] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/gold-price')
      .then(r => r.json())
      .then(data => { if (data.price) setBasePrice(data.price) })
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
                <th></th>
                <th>{t.tableCol1g}</th>
                <th>{t.tableCol1oz}</th>
                <th>{t.tableCol1kg}</th>
              </tr>
            </thead>
            <tbody>
              {KARATS.map(({ key, fineness }) => {
                const perG  = (basePrice / TROY_OZ_TO_G) * fineness
                const perOz = basePrice * fineness
                const perKg = perG * 1000
                return (
                  <tr key={key}>
                    <td>{t[key]}</td>
                    <td>CHF {fmt(perG)}</td>
                    <td>CHF {fmt(perOz)}</td>
                    <td>CHF {fmt(perKg)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      <p className={styles.disclaimer}>{t.tableDisclaimer}</p>
    </section>
  )
}
