import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum | Goldankauf Schaffhausen',
  description: 'Impressum und rechtliche Angaben zu Goldankauf Schaffhausen, betrieben durch Termin8 — Nikola Mrsic, Bocksrietweg 18, 8200 Schaffhausen.',
  alternates: { canonical: 'https://www.goldankauf-schaffhausen.ch/impressum' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
