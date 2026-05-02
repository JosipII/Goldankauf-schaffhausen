'use client'
import { useLang } from '@/lib/lang-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './impressum.module.css'

const content = {
  de: {
    title: 'Impressum',
    infoLabel: 'Betrieben durch',
    info: [
      { label: 'Firma', value: 'TERMIN8 c/o Nikola Mrsic' },
      { label: 'Handelsregister-Nr.', value: 'CH-290.1.021.186-6' },
      { label: 'UID / MWST', value: 'CHE-333.148.668' },
      { label: 'Adresse', value: 'Bocksrietweg 18\n8200 Schaffhausen\nSchweiz' },
      { label: 'Kontakt', value: 'kontakt@termin8.ch' },
      { label: 'Vertretungsberechtigte Person', value: 'Nikola Mrsic' },
    ],
    sections: [
      {
        heading: 'Haftungsausschluss',
        body: `Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.\n\nAlle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.`,
      },
      {
        heading: 'Haftung für Links',
        body: `Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr der Nutzerin oder des Nutzers.`,
      },
      {
        heading: 'Urheberrechte',
        body: `Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Nikola Mrsic oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.`,
      },
      {
        heading: 'Datenschutz',
        body: `Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und das revidierte Datenschutzgesetz (nDSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.\n\nWeitere Informationen finden Sie in unserer Datenschutzerklärung.`,
        link: { label: 'Zur Datenschutzerklärung →', href: '/datenschutz' },
      },
    ],
  },
  en: {
    title: 'Legal Notice',
    infoLabel: 'Operated by',
    info: [
      { label: 'Company', value: 'TERMIN8 c/o Nikola Mrsic' },
      { label: 'Trade Register No.', value: 'CH-290.1.021.186-6' },
      { label: 'UID / VAT', value: 'CHE-333.148.668' },
      { label: 'Address', value: 'Bocksrietweg 18\n8200 Schaffhausen\nSwitzerland' },
      { label: 'Contact', value: 'kontakt@termin8.ch' },
      { label: 'Authorised representative', value: 'Nikola Mrsic' },
    ],
    sections: [
      {
        heading: 'Disclaimer',
        body: `The author accepts no liability for the correctness, accuracy, timeliness, reliability, or completeness of the information provided. Any claims against the author for material or immaterial damages arising from access to or use of published information, misuse of the connection, or technical faults are excluded.\n\nAll offers are non-binding. The author expressly reserves the right to change, supplement, or delete parts of the site or the entire offering without prior notice, or to cease publication temporarily or permanently.`,
      },
      {
        heading: 'Liability for Links',
        body: `References and links to third-party websites are outside our area of responsibility. We disclaim all responsibility for such websites. Access to and use of such websites is at the user's own risk.`,
      },
      {
        heading: 'Copyright',
        body: `All copyright and other rights to content, images, photos, or other files on this website belong exclusively to Nikola Mrsic or the specifically named rights holders. Written consent from the copyright holder must be obtained in advance for any reproduction of any element.`,
      },
      {
        heading: 'Data Protection',
        body: `Based on Article 13 of the Swiss Federal Constitution and the revised Federal Act on Data Protection (nFADP), every person has the right to protection of their privacy and against misuse of their personal data. We comply with these provisions. Personal data is treated strictly confidentially and is neither sold nor disclosed to third parties.\n\nFor full details, please see our Privacy Policy.`,
        link: { label: 'Privacy Policy →', href: '/datenschutz' },
      },
    ],
  },
}

export default function ImpressumPage() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>{c.title}</h1>

          <div className={styles.infoBlock}>
            {c.info.map((row) => (
              <div key={row.label} className={styles.infoRow}>
                <span className={styles.infoLabel}>{row.label}</span>
                <span className={styles.infoValue}>{row.value}</span>
              </div>
            ))}
          </div>

          {c.sections.map((s) => (
            <section key={s.heading} className={styles.section}>
              <h2 className={styles.heading}>{s.heading}</h2>
              <p className={styles.body}>{s.body}</p>
              {'link' in s && s.link && (
                <a href={s.link.href} className={styles.link}>{s.link.label}</a>
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
