'use client'
import { useLang } from '@/lib/lang-context'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useLang()

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
      </div>
    </section>
  )
}
