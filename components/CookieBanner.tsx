'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/lib/lang-context'
import styles from './CookieBanner.module.css'

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`
}

export default function CookieBanner() {
  const { t } = useLang()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getCookie('cookie_consent')) setVisible(true)
  }, [])

  function accept() {
    setCookie('cookie_consent', 'accepted', 365)
    setVisible(false)
  }

  function decline() {
    setCookie('cookie_consent', 'essential', 365)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-modal="false" aria-label={t.cookieTitle}>
      <div className={styles.inner}>
        <p className={styles.text}>
          {t.cookieText}{' '}
          <a href="/datenschutz" className={styles.link}>{t.cookiePolicy}</a>.
        </p>
        <div className={styles.actions}>
          <button className={styles.btnDecline} onClick={decline}>{t.cookieDecline}</button>
          <button className={styles.btnAccept} onClick={accept}>{t.cookieAccept}</button>
        </div>
      </div>
    </div>
  )
}
