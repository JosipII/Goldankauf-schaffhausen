import { NextResponse } from 'next/server'
import { getSilverwarePrice } from '@/lib/gold-price'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json(await getSilverwarePrice(), { headers: { 'Cache-Control': 'no-store' } })
}
