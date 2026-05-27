import { NextResponse } from 'next/server'
import { getGoldPrice } from '@/lib/gold-price'

export const revalidate = 28800 // 8 hours — 3 calls/day, well within 100/month free tier

export async function GET() {
  const result = await getGoldPrice()
  if (result.price === null) {
    return NextResponse.json({ price: null, updatedAt: null }, { status: 200 })
  }
  return NextResponse.json(result)
}
