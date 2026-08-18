import { NextResponse } from 'next/server'
import { getGoldPrice } from '@/lib/gold-price'

export const dynamic = 'force-dynamic'

export async function GET() {
  const result = await getGoldPrice()
  return NextResponse.json(result, { headers: { 'Cache-Control': 'no-store' } })
}
