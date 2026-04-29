'use client'
import { useLang } from '@/lib/lang-context'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { lang, t, toggle } = useLang()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoName}>Goldankauf Schaffhausen</span>
        <span className={styles.logoSub}>{t.navSub}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.langToggle}>
          <button
            className={`${styles.langBtn} ${lang === 'de' ? styles.langBtnActive : ''}`}
            onClick={() => toggle('de')}
          >DE</button>
          <button
            className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
            onClick={() => toggle('en')}
          >EN</button>
        </div>
        <a className={styles.cta} href="#kontakt">{t.navCta}</a>
      </div>
    </nav>
  )
}
