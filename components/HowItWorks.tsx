'use client'
import { useLang } from '@/lib/lang-context'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const { t } = useLang()
  const steps = [
    { num: '01', title: t.howStep1Title, body: t.howStep1Body },
    { num: '02', title: t.howStep2Title, body: t.howStep2Body },
    { num: '03', title: t.howStep3Title, body: t.howStep3Body },
  ]
  return (
    <section className={styles.section}>
      <div className={styles.label}>{t.howLabel}</div>
      <div className={styles.steps}>
        {steps.map(s => (
          <div key={s.num} className={styles.step}>
            <span className={styles.number}>{s.num}</span>
            <div className={styles.title}>{s.title}</div>
            <p className={styles.body}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
