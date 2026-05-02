'use client'
import { useLang } from '@/lib/lang-context'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <span className={styles.copy}>© {new Date().getFullYear()} Goldankauf Schaffhausen</span>
        <nav className={styles.legal}>
          <a href="/datenschutz" className={styles.legalLink}>{t.footerDatenschutz}</a>
          <span className={styles.dot}>·</span>
          <a href="/impressum" className={styles.legalLink}>{t.footerImpressum}</a>
          <span className={styles.dot}>·</span>
          <a href="/agb" className={styles.legalLink}>{t.footerAgb}</a>
        </nav>
      </div>
      <a className={styles.link} href="https://termin8.ch" target="_blank" rel="noopener noreferrer">
        {t.footerLink} <em className={styles.linkEm}>termin8.ch ↗</em>
      </a>
    </footer>
  )
}
