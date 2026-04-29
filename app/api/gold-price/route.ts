import { NextResponse } from 'next/server'

export const revalidate = 28800 // 8 hours — 3 calls/day, fits free tier 100/month

export async function GET() {
  const key = process.env.METALS_API_KEY
  if (!key) {
    return NextResponse.json({ price: null, error: 'API key not configured' }, { status: 500 })
  }

  try {
    const res = await fetch(
      `https://metals-api.com/api/latest?access_key=${key}&base=XAU&symbols=CHF`,
      { next: { revalidate: 28800 } }
    )

    if (!res.ok) throw new Error(`metals-api returned ${res.status}`)

    const data = await res.json()
    // metals-api returns rates as XAU→CHF, so 1 troy oz in CHF
    const price: number = data.rates?.CHF

    if (!price) throw new Error('CHF rate missing in response')

    return NextResponse.json({
      price: Math.round(price * 100) / 100,
      updatedAt: new Date().toISOString(),
    })
  } catch (err) {
    // Fallback: return a null price — UI shows "—" gracefully
    console.error('gold-price fetch failed:', err)
    return NextResponse.json({ price: null, updatedAt: null }, { status: 200 })
  }
}
