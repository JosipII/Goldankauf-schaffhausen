import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB | Goldankauf Schaffhausen',
  description: 'Allgemeine Geschäftsbedingungen für den Goldankauf Schaffhausen — Nikola Mrsic (TERMIN8). Angebotsanfrage, Preisermittlung, Zahlung und Gerichtsstand.',
  alternates: { canonical: 'https://www.goldankauf-schaffhausen.ch/agb' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
