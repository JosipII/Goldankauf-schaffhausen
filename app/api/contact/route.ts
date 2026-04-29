import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { firstName, lastName, email, phone, message } = body

  // Validate required fields
  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  try {
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
