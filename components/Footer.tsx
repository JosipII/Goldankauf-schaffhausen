'use client'
import { useLang } from '@/lib/lang-context'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <span className={styles.copy}>© {new Date().getFullYear()} Goldankauf Schaffhausen</span>
      <a className={styles.link} href="https://termin8.ch" target="_blank" rel="noopener noreferrer">
        {t.footerLink} <em className={styles.linkEm}>termin8.ch ↗</em>
      </a>
    </footer>
  )
}
