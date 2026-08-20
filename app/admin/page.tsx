import type { Metadata } from 'next'
import Link from 'next/link'
import { adminAuthIsConfigured, hasAdminSession } from '@/lib/admin-auth'
import { getGoldPrice, getSilverwarePrice } from '@/lib/gold-price'
import { LoginForm, LogoutForm, PriceForm, SilverwarePriceForm } from './AdminForms'
import styles from './admin.module.css'

export const metadata: Metadata = {
  title: 'Preisverwaltung | Goldankauf Schaffhausen',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const authenticated = await hasAdminSession()
  const configured = adminAuthIsConfigured()
  const [current, silverware] = authenticated
    ? await Promise.all([getGoldPrice(), getSilverwarePrice()])
    : [null, null]

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.brand}>GOLDANKAUF SCHAFFHAUSEN</div>
        <p className={styles.eyebrow}>Administration</p>
        <h1>{authenticated ? 'Goldpreis verwalten' : 'Geschützter Bereich'}</h1>
        <p className={styles.intro}>
          {authenticated
            ? 'Der gespeicherte Preis wird auf der Website als Basis für alle Karatpreise verwendet.'
            : 'Melde dich an, um den Goldpreis der Website zu ändern.'}
        </p>

        {!configured && (
          <div className={styles.configWarning} role="alert">
            Setze zuerst <code>ADMIN_PASSWORD</code> und <code>ADMIN_SESSION_SECRET</code> in den Umgebungsvariablen der Bereitstellung.
          </div>
        )}

        {authenticated ? (
          <>
            <div className={styles.current}>
              <span>999.9 Gold · 1 Gramm</span>
              <strong>{current?.price ? `CHF ${current.price.toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / g` : 'Noch kein Preis'}</strong>
              {current?.updatedAt && (
                <small>Aktualisiert am {new Date(current.updatedAt).toLocaleString('de-CH', { dateStyle: 'medium', timeStyle: 'short' })}</small>
              )}
            </div>
            <PriceForm currentPrice={current?.price ?? null} />
            <div className={styles.current}>
              <span>Versilbertes Besteck</span>
              <strong>{silverware?.price ? `CHF ${silverware.price.toLocaleString('de-CH', { maximumFractionDigits: 2 })} / kg` : 'Noch kein Preis'}</strong>
              {silverware?.updatedAt && (
                <small>Aktualisiert am {new Date(silverware.updatedAt).toLocaleString('de-CH', { dateStyle: 'medium', timeStyle: 'short' })}</small>
              )}
            </div>
            <SilverwarePriceForm currentPrice={silverware?.price ?? null} />
            <LogoutForm />
          </>
        ) : (
          <LoginForm configured={configured} />
        )}

        <Link href="/" className={styles.back}>← Zur Website</Link>
      </section>
    </main>
  )
}
