import { NextResponse } from 'next/server'
import { getGoldPrice } from '@/lib/gold-price'

export const revalidate = 300 // 5 minutes — unlimited plan

export async function GET() {
  const result = await getGoldPrice()
  if (result.price === null) {
    return NextResponse.json({ price: null, updatedAt: null }, { status: 200 })
  }
  return NextResponse.json(result)
}
