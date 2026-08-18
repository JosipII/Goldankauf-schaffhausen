import { Redis } from '@upstash/redis'

export interface GoldPriceResult {
  price: number | null
  updatedAt: string | null
}

const GOLD_PRICE_KEY = 'goldankauf:gold-price-chf'

function redis() {
  return Redis.fromEnv()
}

export async function getGoldPrice(): Promise<GoldPriceResult> {
  try {
    const stored = await redis().get<GoldPriceResult>(GOLD_PRICE_KEY)

    if (
      !stored ||
      typeof stored.price !== 'number' ||
      !Number.isFinite(stored.price) ||
      typeof stored.updatedAt !== 'string'
    ) {
      return { price: null, updatedAt: null }
    }

    return stored
  } catch (error) {
    console.error('manual gold-price read failed:', error)
    return { price: null, updatedAt: null }
  }
}

export async function setGoldPrice(price: number): Promise<GoldPriceResult> {
  const value = {
    price: Math.round(price * 100) / 100,
    updatedAt: new Date().toISOString(),
  }

  await redis().set(GOLD_PRICE_KEY, value)
  return value
}
