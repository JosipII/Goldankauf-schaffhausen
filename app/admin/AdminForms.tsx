'use client'

import { useActionState } from 'react'
import { login, logout, updateGoldPrice, updateSilverwarePrice, type AdminActionState } from './actions'
import styles from './admin.module.css'

const initialState: AdminActionState = {}

function Message({ state }: { state: AdminActionState }) {
  if (state.error) return <p className={styles.error} role="alert">{state.error}</p>
  if (state.success) return <p className={styles.success} role="status">{state.success}</p>
  return null
}

export function LoginForm({ configured }: { configured: boolean }) {
  const [state, action, pending] = useActionState(login, initialState)
  return (
    <form action={action} className={styles.form}>
      <label htmlFor="password">Passwort</label>
      <input id="password" name="password" type="password" autoComplete="current-password" required autoFocus disabled={!configured || pending} />
      <button type="submit" disabled={!configured || pending}>{pending ? 'Anmelden …' : 'Anmelden'}</button>
      <Message state={state} />
    </form>
  )
}

export function PriceForm({ currentPrice }: { currentPrice: number | null }) {
  const [state, action, pending] = useActionState(updateGoldPrice, initialState)
  return (
    <form action={action} className={styles.form}>
      <label htmlFor="price">Ankaufspreis in CHF pro Gramm 999.9 Gold</label>
      <div className={styles.priceInput}>
        <span>CHF</span>
        <input id="price" name="price" type="number" min="0.01" max="10000" step="0.01" inputMode="decimal" defaultValue={currentPrice ?? ''} placeholder="z. B. 105.00" required autoFocus disabled={pending} />
      </div>
      <button type="submit" disabled={pending}>{pending ? 'Speichern …' : 'Goldpreis speichern'}</button>
      <Message state={state} />
    </form>
  )
}

export function SilverwarePriceForm({ currentPrice }: { currentPrice: number | null }) {
  const [state, action, pending] = useActionState(updateSilverwarePrice, initialState)
  return (
    <form action={action} className={styles.form}>
      <label htmlFor="silverware-price">Besteckpreis in CHF pro Kilogramm</label>
      <div className={styles.priceInput}>
        <span>CHF</span>
        <input id="silverware-price" name="price" type="number" min="0.01" max="10000" step="0.01" inputMode="decimal" defaultValue={currentPrice ?? ''} placeholder="z. B. 31.00" required disabled={pending} />
      </div>
      <button type="submit" disabled={pending}>{pending ? 'Speichern …' : 'Besteckpreis speichern'}</button>
      <Message state={state} />
    </form>
  )
}

export function LogoutForm() {
  return (
    <form action={logout} className={styles.logoutForm}>
      <button type="submit" className={styles.logout}>Abmelden</button>
    </form>
  )
}
