import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '10 m'),
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '127.0.0.1'
  const { success } = await ratelimit.limit(ip)
  if (!success) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  const body = await req.json()
  const { firstName, lastName, email, phone, message } = body

  if (
    typeof firstName !== 'string' || typeof lastName !== 'string' ||
    typeof email !== 'string' || typeof message !== 'string'
  ) {
    return NextResponse.json({ error: 'Invalid field types' }, { status: 400 })
  }

  if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (firstName.length > 100 || lastName.length > 100 || email.length > 254 || message.length > 5000) {
    return NextResponse.json({ error: 'Field too long' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  if (phone !== undefined && phone !== null) {
    if (typeof phone !== 'string' || phone.length > 30 || !/^[+\d\s\-().]*$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Goldankauf Schaffhausen <noreply@goldankauf-schaffhausen.ch>',
      to: 'kontakt@termin8.ch',
      replyTo: email,
      subject: `Goldankauf Anfrage von ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : '',
        '',
        `Nachricht:`,
        message,
      ].filter(Boolean).join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('resend error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
