'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import {
  ADMIN_COOKIE,
  adminAuthIsConfigured,
  adminCookieOptions,
  createAdminSession,
  hasAdminSession,
  passwordIsValid,
} from '@/lib/admin-auth'
import { setGoldPrice } from '@/lib/gold-price'

export interface AdminActionState {
  error?: string
  success?: string
}

export async function login(_state: AdminActionState, formData: FormData): Promise<AdminActionState> {
  if (!adminAuthIsConfigured()) {
    return { error: 'Admin-Zugang ist auf dem Server noch nicht konfiguriert.' }
  }

  const password = formData.get('password')
  if (typeof password !== 'string' || !passwordIsValid(password)) {
    return { error: 'Falsches Passwort.' }
  }

  ;(await cookies()).set(ADMIN_COOKIE, createAdminSession(), adminCookieOptions)
  revalidatePath('/admin')
  return { success: 'Angemeldet.' }
}

export async function updateGoldPrice(_state: AdminActionState, formData: FormData): Promise<AdminActionState> {
  if (!(await hasAdminSession())) {
    return { error: 'Deine Sitzung ist abgelaufen. Bitte melde dich erneut an.' }
  }

  const rawPrice = formData.get('price')
  const price = typeof rawPrice === 'string' ? Number(rawPrice.replace(',', '.')) : Number.NaN
  if (!Number.isFinite(price) || price <= 0 || price > 1_000_000) {
    return { error: 'Bitte gib einen gültigen Preis zwischen 0 und 1’000’000 CHF ein.' }
  }

  try {
    const saved = await setGoldPrice(price)
    revalidatePath('/')
    revalidatePath('/admin')
    return {
      success: `Goldpreis auf CHF ${saved.price?.toLocaleString('de-CH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })} gespeichert.`,
    }
  } catch (error) {
    console.error('manual gold-price update failed:', error)
    return { error: 'Der Preis konnte nicht gespeichert werden. Bitte versuche es erneut.' }
  }
}

export async function logout(): Promise<void> {
  ;(await cookies()).delete(ADMIN_COOKIE)
  revalidatePath('/admin')
}
