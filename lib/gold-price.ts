export interface GoldPriceResult {
  price: number | null
  updatedAt: string | null
}

export async function getGoldPrice(): Promise<GoldPriceResult> {
  const key = process.env.GOLD_API_KEY
  if (!key) return { price: null, updatedAt: null }

  try {
    const res = await fetch('https://www.goldapi.io/api/XAU/CHF', {
      headers: { 'x-access-token': key, 'Content-Type': 'application/json' },
      next: { revalidate: 300 },
    })
    if (!res.ok) throw new Error(`goldapi returned ${res.status}`)
    const data = await res.json()
    if (!data.price) throw new Error('price missing in response')
    return {
      price: Math.round(data.price * 100) / 100,
      updatedAt: new Date().toISOString(),
    }
  } catch (err) {
    console.error('gold-price fetch failed:', err)
    return { price: null, updatedAt: null }
  }
}
