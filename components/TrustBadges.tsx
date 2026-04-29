'use client'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import styles from './TrustBadges.module.css'

export default function TrustBadges() {
  const { t } = useLang()
  return (
    <section className={styles.section}>
      <div className={styles.label}>{t.badgesLabel}</div>
      <h2 className={styles.h2}>{t.badgesH2}</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image
            src="/images/badge-ch.png"
            alt="Edelmetallkontrolle"
            className={styles.img}
            width={384}
            height={256}
            style={{ width: '100%', maxWidth: '384px', height: 'auto' }}
          />
          <div className={styles.badgeText}>
            <div className={styles.badgeTitle}>{t.badge1Title}</div>
            <div className={styles.badgeBody}>{t.badge1Body}</div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src="/images/badge-sh.png"
            alt="Eichamt Schaffhausen"
            className={styles.img}
            width={384}
            height={256}
            style={{ width: '100%', maxWidth: '384px', height: 'auto' }}
          />
          <div className={styles.badgeText}>
            <div className={styles.badgeTitle}>{t.badge2Title}</div>
            <div className={styles.badgeBody}>{t.badge2Body}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
