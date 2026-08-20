import { Redis } from '@upstash/redis'

export interface GoldPriceResult {
  price: number | null
  updatedAt: string | null
}

const GOLD_PRICE_PER_GRAM_KEY = 'goldankauf:gold-price-chf-gram'
const LEGACY_GOLD_PRICE_PER_OUNCE_KEY = 'goldankauf:gold-price-chf'
const TROY_OUNCE_IN_GRAMS = 31.1035
const SILVERWARE_PRICE_KEY = 'goldankauf:silverware-price-chf-kg'
const DEFAULT_SILVERWARE_PRICE = 31

function redis() {
  return Redis.fromEnv()
}

export async function getGoldPrice(): Promise<GoldPriceResult> {
  try {
    const stored = await redis().get<GoldPriceResult>(GOLD_PRICE_PER_GRAM_KEY)

    if (
      !stored ||
      typeof stored.price !== 'number' ||
      !Number.isFinite(stored.price) ||
      typeof stored.updatedAt !== 'string'
    ) {
      const legacy = await redis().get<GoldPriceResult>(LEGACY_GOLD_PRICE_PER_OUNCE_KEY)
      if (legacy && typeof legacy.price === 'number' && Number.isFinite(legacy.price)) {
        return {
          price: Math.round((legacy.price / TROY_OUNCE_IN_GRAMS) * 100) / 100,
          updatedAt: legacy.updatedAt,
        }
      }
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

  await redis().set(GOLD_PRICE_PER_GRAM_KEY, value)
  return value
}

export async function getSilverwarePrice(): Promise<GoldPriceResult> {
  try {
    const stored = await redis().get<GoldPriceResult>(SILVERWARE_PRICE_KEY)
    if (!stored || typeof stored.price !== 'number' || !Number.isFinite(stored.price) || typeof stored.updatedAt !== 'string') {
      return { price: DEFAULT_SILVERWARE_PRICE, updatedAt: null }
    }
    return stored
  } catch (error) {
    console.error('silverware-price read failed:', error)
    return { price: DEFAULT_SILVERWARE_PRICE, updatedAt: null }
  }
}

export async function setSilverwarePrice(price: number): Promise<GoldPriceResult> {
  const value = {
    price: Math.round(price * 100) / 100,
    updatedAt: new Date().toISOString(),
  }
  await redis().set(SILVERWARE_PRICE_KEY, value)
  return value
}
