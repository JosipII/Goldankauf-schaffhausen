import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const ADMIN_COOKIE = 'goldankauf_admin'
const SESSION_LIFETIME_SECONDS = 60 * 60 * 12

function sessionSecret(): string | null {
  return process.env.ADMIN_SESSION_SECRET ?? null
}

function sign(value: string, secret: string): string {
  return createHmac('sha256', secret).update(value).digest('base64url')
}

function safeEqual(left: string, right: string): boolean {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer)
}

export function adminAuthIsConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD && sessionSecret())
}

export function passwordIsValid(password: string): boolean {
  const configuredPassword = process.env.ADMIN_PASSWORD
  return Boolean(configuredPassword && safeEqual(password, configuredPassword))
}

export function createAdminSession(): string {
  const secret = sessionSecret()
  if (!secret) throw new Error('ADMIN_SESSION_SECRET is not configured')

  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_LIFETIME_SECONDS
  return `${expiresAt}.${sign(String(expiresAt), secret)}`
}

export async function hasAdminSession(): Promise<boolean> {
  const secret = sessionSecret()
  const token = (await cookies()).get(ADMIN_COOKIE)?.value
  if (!secret || !token) return false

  const [expiresAt, signature, ...extra] = token.split('.')
  if (!expiresAt || !signature || extra.length > 0) return false
  if (!/^\d+$/.test(expiresAt) || Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false

  return safeEqual(signature, sign(expiresAt, secret))
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: 'strict' as const,
  secure: process.env.NODE_ENV === 'production',
  path: '/admin',
  maxAge: SESSION_LIFETIME_SECONDS,
}
