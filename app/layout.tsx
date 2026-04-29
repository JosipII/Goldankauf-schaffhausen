import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goldankauf Schaffhausen',
  description: 'Gold verkaufen in Schaffhausen — diskret, seriös und zum besten Marktpreis.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
