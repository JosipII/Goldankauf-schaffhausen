'use client'
import { useLang } from '@/lib/lang-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './datenschutz.module.css'

const content = {
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Schaffhausen, Mai 2026',
    sections: [
      {
        heading: 'Geltungsbereich',
        body: `Diese Datenschutzerklärung gilt für die Webseite Goldankauf Schaffhausen, betrieben durch die Einzelfirma von Nikola Mrsic (Termin8). Die Webseite unterliegt dem schweizerischen Datenschutzrecht (nDSG) sowie allenfalls anwendbarem ausländischem Datenschutzrecht, insbesondere der Datenschutz-Grundverordnung (DSGVO) der Europäischen Union. Die EU anerkennt, dass das schweizerische Datenschutzrecht einen angemessenen Datenschutz gewährleistet.`,
      },
      {
        heading: 'Gegenstand und Zweck',
        body: `Diese Datenschutzerklärung informiert die Nutzer dieser Webseite über Art, Umfang und Zweck der Erhebung und Verwendung personenbezogener Daten durch die Einzelfirma von Nikola Mrsic.\n\nNikola Mrsic nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften. Da durch neue Technologien und die ständige Weiterentwicklung der Webseite Änderungen an dieser Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen, sich die Datenschutzerklärung in regelmässigen Abständen durchzulesen.`,
      },
      {
        heading: 'Grundlegendes',
        body: `Gestützt auf Artikel 13 der schweizerischen Bundesverfassung, das revidierte Datenschutzgesetz (nDSG) und die DSGVO hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.\n\nIn enger Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.`,
      },
      {
        heading: 'Erhebung von Daten beim Webseitenbesuch',
        body: `Beim Aufrufen unserer Webseite werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Webseite gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:\n\n• IP-Adresse des anfragenden Rechners\n• Datum und Uhrzeit des Zugriffs\n• Name und URL der abgerufenen Datei\n• Webseite, von der aus der Zugriff erfolgt (Referrer-URL)\n• Verwendeter Browser und ggf. Betriebssystem sowie Name des Access-Providers\n\nDiese Daten werden zur Gewährleistung eines reibungslosen Verbindungsaufbaus, einer komfortablen Nutzung sowie zur Auswertung der Systemsicherheit und -stabilität verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. In keinem Fall verwenden wir diese Daten, um Rückschlüsse auf Ihre Person zu ziehen.`,
      },
      {
        heading: 'Kontaktformular',
        body: `Wenn Sie unser Kontaktformular ausfüllen, erheben wir folgende personenbezogene Daten:\n\n• Vorname und Nachname\n• E-Mail-Adresse\n• Telefonnummer (optional)\n• Nachrichteninhalt\n\nDiese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage und zur Unterbreitung eines persönlichen Angebots verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; bei Vertragsanbahnung zusätzlich Art. 6 Abs. 1 lit. b DSGVO. Nach abschliessender Bearbeitung und Ablauf allfälliger Aufbewahrungsfristen werden die Daten gelöscht.`,
      },
      {
        heading: 'Drittanbieter und Auftragsverarbeiter',
        body: `Zur Bereitstellung unserer Webseite setzen wir folgende externe Dienste ein:\n\n• Resend (resend.com) – für den Versand von E-Mail-Benachrichtigungen nach Eingang einer Kontaktanfrage. Anbieter: Resend Inc., USA. Ihre E-Mail-Adresse und Ihr Name werden zur Zustellung der Nachricht verwendet. Resend verarbeitet Daten gemäss seiner Datenschutzerklärung.\n\n• Upstash (upstash.com) – zur technischen Absicherung des Kontaktformulars (Rate-Limiting). Es werden keine personenbezogenen Daten dauerhaft gespeichert.\n\n• GoldAPI (goldapi.io) – zur Anzeige aktueller Goldkurse. Es werden keine personenbezogenen Daten übermittelt.`,
      },
      {
        heading: 'Cookies',
        body: `Diese Webseite verwendet ausschliesslich technisch notwendige Cookies sowie ein Cookie zur Speicherung Ihrer Cookie-Einstellungen:\n\n• cookie_consent: Speichert Ihre Wahl im Cookie-Banner (Akzeptieren / Nur Notwendige). Laufzeit: 1 Jahr. Dieses Cookie verlässt Ihr Gerät nicht zu Analysezwecken. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.\n\nEs werden keine Tracking-, Analyse- oder Marketing-Cookies gesetzt. Beim ersten Besuch wird ein Cookie-Banner angezeigt. Ihre Wahl kann jederzeit durch Löschen der Browser-Cookies zurückgesetzt werden.`,
      },
      {
        heading: 'Links',
        body: `Diese Webseite kann Hyperlinks zu anderen Webseiten enthalten, die Nikola Mrsic nicht betreibt oder überwacht. Für deren Inhalte oder Umgang mit Personendaten wird keine Verantwortung übernommen.`,
      },
      {
        heading: 'Rechte des Nutzers',
        body: `Sie haben das Recht auf Auskunft, Berichtigung, Einschränkung, Löschung, Datenportabilität sowie das Recht auf Beschwerde bei einer Aufsichtsbehörde.\n\nFür Anfragen wenden Sie sich bitte an: datenschutz@termin8.ch`,
      },
      {
        heading: 'Löschung von Daten',
        body: `Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen entgegenstehen. Andernfalls erfolgt eine Einschränkung der Verarbeitung.`,
      },
      {
        heading: 'Widerspruchsrecht',
        body: `Nutzer dieser Webseite können der Verarbeitung ihrer personenbezogenen Daten jederzeit widersprechen. Wenden Sie sich dazu an: datenschutz@termin8.ch`,
      },
      {
        heading: 'Aufsichtsbehörde',
        body: `Bei Beschwerden können Sie sich an den Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) wenden:\nwww.edoeb.admin.ch\n\nEU-Besucher haben das Recht, eine Beschwerde bei der zuständigen Datenschutzbehörde ihres Wohnsitzlandes einzureichen.`,
      },
      {
        heading: 'Änderungen dieser Datenschutzerklärung',
        body: `Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Es gilt jeweils die aktuelle Version bei Ihrem Besuch.`,
      },
      {
        heading: 'Kontakt',
        body: `Goldankauf Schaffhausen\nbetrieben durch Termin8 – Nikola Mrsic\nBocksrietweg 18\n8200 Schaffhausen\nSchweiz\nE-Mail: datenschutz@termin8.ch\n\nGerichtsstand ist Schaffhausen, Schweiz.`,
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: 'Schaffhausen, May 2026',
    sections: [
      {
        heading: 'Scope',
        body: `This Privacy Policy applies to the Goldankauf Schaffhausen website, operated by Nikola Mrsic (sole trader, Termin8). The website is subject to Swiss data protection law (nFADP / nDSG) and, where applicable, the EU General Data Protection Regulation (GDPR). The EU recognises that Swiss data protection law provides an adequate level of protection.`,
      },
      {
        heading: 'Purpose',
        body: `This Privacy Policy informs users of this website about the nature, scope, and purpose of the collection and use of personal data by the sole trader Nikola Mrsic.\n\nWe take your privacy very seriously and handle your personal data confidentially and in accordance with applicable law. As this policy may be updated over time, we recommend reviewing it periodically.`,
      },
      {
        heading: 'General Principles',
        body: `Based on Article 13 of the Swiss Federal Constitution, the revised Federal Act on Data Protection (nFADP), and the GDPR, every person has the right to protection of their privacy and protection against misuse of their personal data. We comply with these provisions. Personal data is treated strictly confidentially and is neither sold nor disclosed to third parties.\n\nIn close cooperation with our hosting providers, we take all reasonable steps to protect our databases against unauthorised access, loss, misuse, or falsification.`,
      },
      {
        heading: 'Data Collected on Website Visits',
        body: `When you visit our website, your browser automatically transmits information to our server. This is temporarily stored in log files and includes:\n\n• IP address of the requesting device\n• Date and time of access\n• Name and URL of the retrieved file\n• Referring website (referrer URL)\n• Browser type, operating system, and access provider\n\nThis data is processed to ensure a smooth connection, comfortable use, and system security. Legal basis: Art. 6(1)(f) GDPR. This data is never used to draw conclusions about your identity.`,
      },
      {
        heading: 'Contact Form',
        body: `When you submit our contact form, we collect:\n\n• First and last name\n• Email address\n• Phone number (optional)\n• Message content\n\nThis data is used solely to handle your enquiry and provide a personal offer. Legal basis: Art. 6(1)(f) GDPR; additionally Art. 6(1)(b) GDPR for pre-contractual measures. Data is deleted after the enquiry is concluded and any statutory retention periods have elapsed.`,
      },
      {
        heading: 'Third-Party Services',
        body: `We use the following external services:\n\n• Resend (resend.com) – for sending email notifications when a contact enquiry is received. Provider: Resend Inc., USA. Your email address and name are used solely for message delivery.\n\n• Upstash (upstash.com) – for rate-limiting the contact form. No personal data is permanently stored.\n\n• GoldAPI (goldapi.io) – for displaying current gold prices. No personal data is transmitted.`,
      },
      {
        heading: 'Cookies',
        body: `This website uses only technically necessary cookies and one cookie to store your cookie preferences:\n\n• cookie_consent: Stores your choice from the cookie banner (Accept / Essential only). Duration: 1 year. This cookie is not used for analytics. Legal basis: Art. 6(1)(f) GDPR.\n\nNo tracking, analytics, or marketing cookies are set. A cookie banner is shown on your first visit. You can reset your choice at any time by clearing your browser cookies.`,
      },
      {
        heading: 'Links',
        body: `This website may contain links to third-party websites not operated or monitored by Nikola Mrsic. We accept no responsibility for their content or data practices.`,
      },
      {
        heading: 'Your Rights',
        body: `You have the right to access, rectification, restriction, erasure, data portability, and the right to lodge a complaint with a supervisory authority.\n\nTo exercise your rights, contact: datenschutz@termin8.ch`,
      },
      {
        heading: 'Data Deletion',
        body: `Data is deleted once it is no longer needed for the original purpose and no statutory retention obligations apply. Otherwise, processing is restricted.`,
      },
      {
        heading: 'Right to Object',
        body: `Users may object to the processing of their personal data at any time by contacting: datenschutz@termin8.ch`,
      },
      {
        heading: 'Supervisory Authority',
        body: `For complaints, you may contact the Federal Data Protection and Information Commissioner (FDPIC):\nwww.edoeb.admin.ch\n\nEU visitors also have the right to lodge a complaint with the supervisory authority in their country of residence.`,
      },
      {
        heading: 'Changes to This Policy',
        body: `We reserve the right to update this Privacy Policy at any time. The version in effect at the time of your visit applies.`,
      },
      {
        heading: 'Contact',
        body: `Goldankauf Schaffhausen\noperated by Termin8 – Nikola Mrsic\nBocksrietweg 18\n8200 Schaffhausen\nSwitzerland\nEmail: datenschutz@termin8.ch\n\nPlace of jurisdiction: Schaffhausen, Switzerland.`,
      },
    ],
  },
}

export default function DatenschutzPage() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.updated}>{c.updated}</p>
          <h1 className={styles.title}>{c.title}</h1>
          {c.sections.map((s) => (
            <section key={s.heading} className={styles.section}>
              <h2 className={styles.heading}>{s.heading}</h2>
              <p className={styles.body}>{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
