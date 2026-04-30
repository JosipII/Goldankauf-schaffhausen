import { NextResponse } from 'next/server'

export const revalidate = 28800 // 8 hours — 3 calls/day, well within 100/month free tier

export async function GET() {
  const key = process.env.GOLD_API_KEY
  if (!key) {
    return NextResponse.json({ price: null, error: 'API key not configured' }, { status: 500 })
  }

  try {
    const res = await fetch('https://www.goldapi.io/api/XAU/CHF', {
      headers: { 'x-access-token': key, 'Content-Type': 'application/json' },
      next: { revalidate: 28800 },
    })

    if (!res.ok) throw new Error(`goldapi returned ${res.status}`)

    const data = await res.json()
    const price: number = data.price

    if (!price) throw new Error('price missing in response')

    return NextResponse.json({
      price: Math.round(price * 100) / 100,
      updatedAt: new Date().toISOString(),
    })
  } catch (err) {
    console.error('gold-price fetch failed:', err)
    return NextResponse.json({ price: null, updatedAt: null }, { status: 200 })
  }
}
