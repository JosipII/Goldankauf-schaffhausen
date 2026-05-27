import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Goldankauf Schaffhausen',
  description: 'Datenschutzerklärung von Goldankauf Schaffhausen — Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäss nDSG und DSGVO.',
  alternates: { canonical: 'https://goldankauf-schaffhausen.ch/datenschutz' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
