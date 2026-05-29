import type { Metadata } from 'next'
import { LangProvider } from '@/lib/lang-context'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const BASE = 'https://www.goldankauf-schaffhausen.ch'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Goldankauf Schaffhausen',
  description: 'Goldankauf in Schaffhausen — wir kaufen Goldschmuck, Münzen, Zahngold, Barren und versilbertes Besteck (31 CHF/kg) zum besten Marktpreis.',
  url: BASE,
  telephone: '+41526242525',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Löwengässchen 3',
    addressLocality: 'Schaffhausen',
    postalCode: '8200',
    addressCountry: 'CH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.6965,
    longitude: 8.6356,
  },
  areaServed: {
    '@type': 'City',
    name: 'Schaffhausen',
  },
  image: `${BASE}/images/goldbar.png`,
  priceRange: '$$',
  sameAs: ['https://termin8.ch'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Ankauf',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Versilbertes Besteck ankaufen',
        description: 'Ankauf von versilbertem Besteck zum Festpreis von 31 CHF/kg.',
        priceCurrency: 'CHF',
        price: '31',
      },
    ],
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Gold verkaufen Schaffhausen | Goldankauf zum Bestpreis',
  description: 'Goldankauf Schaffhausen — wir kaufen Goldschmuck, Münzen, Zahngold & Barren sowie versilbertes Besteck (31 CHF/kg) zum besten Marktpreis. Diskret, seriös, sofort bezahlt.',
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
  },
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    type: 'website',
    locale: 'de_CH',
    url: BASE,
    siteName: 'Goldankauf Schaffhausen',
    title: 'Gold verkaufen Schaffhausen | Goldankauf zum Bestpreis',
    description: 'Goldankauf Schaffhausen — wir kaufen Goldschmuck, Münzen, Zahngold & Barren sowie versilbertes Besteck (31 CHF/kg) zum besten Marktpreis. Diskret, seriös, sofort bezahlt.',
    images: [
      {
        url: '/images/goldbar.png',
        width: 1200,
        height: 630,
        alt: 'Goldankauf Schaffhausen — Gold verkaufen zum Bestpreis',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <LangProvider>
          {children}
          <CookieBanner />
        </LangProvider>
      </body>
    </html>
  )
}
