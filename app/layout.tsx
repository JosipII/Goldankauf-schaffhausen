import type { Metadata } from 'next'
import { LangProvider } from '@/lib/lang-context'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Goldankauf Schaffhausen',
  description: 'Gold verkaufen in Schaffhausen — diskret, seriös und zum besten Marktpreis.',
  icons: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <LangProvider>
          {children}
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  )
}
