'use client'
import { useLang } from '@/lib/lang-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './agb.module.css'

const content = {
  de: {
    title: 'Allgemeine Geschäftsbedingungen',
    subtitle: 'Goldankauf Schaffhausen – Nikola Mrsic (TERMIN8)',
    updated: 'Stand: Schaffhausen, Mai 2026',
    sections: [
      {
        heading: '1. Geltungsbereich',
        body: `Diese Allgemeinen Geschäftsbedingungen («AGB») gelten für sämtliche Anfragen, Angebote und Ankaufsgeschäfte im Zusammenhang mit Goldankauf Schaffhausen, betrieben durch die Einzelfirma von Nikola Mrsic (TERMIN8), Bocksrietweg 18, 8200 Schaffhausen.\n\nDiese AGB gelten für alle Personen, die über das Kontaktformular eine Anfrage stellen oder persönlich einen Ankauf vornehmen. Mit der Einreichung einer Anfrage oder dem Abschluss eines Ankaufs akzeptiert der Kunde diese AGB.`,
      },
      {
        heading: '2. Leistungsbeschreibung',
        body: `Goldankauf Schaffhausen kauft Edelmetalle und edelmetallhaltige Gegenstände an, insbesondere:\n\n• Goldschmuck (Ringe, Ketten, Armbänder etc.)\n• Goldmünzen und -barren\n• Zahngold\n• Sonstige Gold-, Silber- und Platinwaren\n\nDer Ankauf erfolgt ausschliesslich persönlich an unserem Standort in Schaffhausen. Das Kontaktformular auf dieser Website dient lediglich der unverbindlichen Voranfrage.`,
      },
      {
        heading: '3. Angebotsanfrage und Unverbindlichkeit',
        body: `Anfragen über das Kontaktformular stellen kein verbindliches Angebot dar und begründen keinerlei vertragliche Verpflichtung. Wir melden uns nach Eingang der Anfrage mit einem unverbindlichen Ersthinweis.\n\nEin verbindliches Kaufangebot erfolgt erst nach persönlicher Begutachtung und Prüfung der Gegenstände vor Ort. Der Kunde ist nicht verpflichtet, ein Angebot anzunehmen.`,
      },
      {
        heading: '4. Preisermittlung',
        body: `Der Ankaufspreis richtet sich nach dem zum Zeitpunkt der Transaktion aktuellen Marktpreis (XAU/CHF) sowie dem durch Messung festgestellten Feingehalt des Edelmetalls. Die auf der Website angezeigten Goldkurse dienen als Richtwert und sind unverbindlich.\n\nDie Firma behält sich vor, einen Ankaufsabschlag vorzunehmen. Der endgültige Preis wird erst nach Prüfung der Ware mitgeteilt.`,
      },
      {
        heading: '5. Vertragsabschluss',
        body: `Ein Ankaufsvertrag kommt erst durch die ausdrückliche mündliche oder schriftliche Einigung beider Parteien vor Ort zustande. Bis zur Einigung kann der Kunde die Ware jederzeit ohne Angabe von Gründen zurückziehen.`,
      },
      {
        heading: '6. Zahlung',
        body: `Die Zahlung des vereinbarten Ankaufspreises an den Kunden erfolgt unmittelbar nach Vertragsabschluss – wahlweise bar oder per Banküberweisung. Der Kunde wählt die Zahlungsart vor Abschluss des Geschäfts.`,
      },
      {
        heading: '7. Datenschutz',
        body: `Die im Rahmen einer Anfrage oder eines Vertragsabschlusses erhobenen Daten werden ausschliesslich zur Bearbeitung des Anliegens und zur Erfüllung der vertraglichen Pflichten verwendet. Es gelten die gesetzlichen Datenschutzbestimmungen (nDSG, DSGVO).\n\nWeitere Informationen finden Sie in unserer Datenschutzerklärung.`,
        link: { label: 'Zur Datenschutzerklärung →', href: '/datenschutz' },
      },
      {
        heading: '8. Haftung',
        body: `Die Haftung für jegliche indirekte Schäden und Mangelfolgeschäden wird vollumfänglich ausgeschlossen. Die Haftung für direkte Schäden ist unbeschränkt.\n\nJegliche Haftung für Hilfspersonen wird vollumfänglich ausgeschlossen.`,
      },
      {
        heading: '9. Immaterialgüterrechte',
        body: `Sämtliche Rechte an den Inhalten dieser Website (Texte, Bilder, Logos) stehen Nikola Mrsic zu oder er ist zu deren Benutzung berechtigt. Jegliche Weiterverwendung ohne ausdrückliche schriftliche Genehmigung ist untersagt.`,
      },
      {
        heading: '10. Vertraulichkeit',
        body: `Beide Parteien verpflichten sich, sämtliche im Zusammenhang mit dem Ankauf erhaltenen Informationen vertraulich zu behandeln. Diese Pflicht bleibt auch nach Abschluss oder Abbruch eines Geschäfts bestehen.`,
      },
      {
        heading: '11. Höhere Gewalt',
        body: `Wird die Erfüllung durch Ereignisse höherer Gewalt (Naturkatastrophen, Krieg, Terrorismus, Pandemie, staatliche Massnahmen o.Ä.) unmöglich, ist die Firma für die Dauer des Ereignisses von ihren Pflichten befreit. Dauert die höhere Gewalt länger als 30 Tage, können beide Parteien vom Geschäft zurücktreten. Bereits geleistete Zahlungen werden vollumfänglich zurückerstattet.`,
      },
      {
        heading: '12. Salvatorische Klausel',
        body: `Sollte eine Bestimmung dieser AGB ungültig sein oder werden, wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck möglichst nahekommt.`,
      },
      {
        heading: '13. Änderungen',
        body: `Diese AGB können von der Firma jederzeit geändert werden. Die neue Version tritt 30 Tage nach Aufschaltung auf der Website in Kraft. Für abgeschlossene Transaktionen gilt die zum Zeitpunkt des Abschlusses gültige Version.`,
      },
      {
        heading: '14. Anwendbares Recht / Gerichtsstand',
        body: `Diese AGB unterstehen schweizerischem Recht. Gerichtsstand ist Schaffhausen, Schweiz. Das UN-Kaufrecht (CISG) wird ausdrücklich ausgeschlossen.\n\nBei Fragen: kontakt@termin8.ch`,
      },
    ],
  },
  en: {
    title: 'General Terms and Conditions',
    subtitle: 'Goldankauf Schaffhausen – Nikola Mrsic (TERMIN8)',
    updated: 'As of: Schaffhausen, May 2026',
    sections: [
      {
        heading: '1. Scope',
        body: `These General Terms and Conditions ("GTC") apply to all enquiries, offers, and purchase transactions in connection with Goldankauf Schaffhausen, operated by sole trader Nikola Mrsic (TERMIN8), Bocksrietweg 18, 8200 Schaffhausen.\n\nThese GTC apply to all persons who submit an enquiry via the contact form or complete a purchase in person. By submitting an enquiry or completing a transaction, the customer accepts these GTC.`,
      },
      {
        heading: '2. Services',
        body: `Goldankauf Schaffhausen purchases precious metals and precious metal-containing items, in particular:\n\n• Gold jewellery (rings, chains, bracelets, etc.)\n• Gold coins and bars\n• Dental gold\n• Other gold, silver, and platinum items\n\nPurchases take place exclusively in person at our Schaffhausen location. The contact form on this website is for non-binding preliminary enquiries only.`,
      },
      {
        heading: '3. Enquiries and Non-Binding Nature',
        body: `Enquiries submitted via the contact form do not constitute a binding offer and create no contractual obligation. We will respond to your enquiry with a non-binding initial indication.\n\nA binding purchase offer is only made after personal inspection and testing of the items on-site. The customer is under no obligation to accept any offer.`,
      },
      {
        heading: '4. Price Determination',
        body: `The purchase price is based on the current market price (XAU/CHF) at the time of the transaction and the purity of the precious metal as determined by testing. Gold prices displayed on the website are indicative only and non-binding.\n\nThe company reserves the right to apply a purchase discount. The final price is communicated only after examination of the items.`,
      },
      {
        heading: '5. Contract Formation',
        body: `A purchase contract is formed only upon the explicit verbal or written agreement of both parties on-site. Until agreement is reached, the customer may withdraw their items at any time without giving reasons.`,
      },
      {
        heading: '6. Payment',
        body: `Payment of the agreed purchase price to the customer is made immediately upon conclusion of the contract — either in cash or by bank transfer. The customer selects the payment method before the transaction is finalised.`,
      },
      {
        heading: '7. Data Protection',
        body: `Data collected in connection with an enquiry or transaction is used solely to process the matter and fulfil contractual obligations. Applicable data protection law (nFADP, GDPR) applies.\n\nFor full details, please see our Privacy Policy.`,
        link: { label: 'Privacy Policy →', href: '/datenschutz' },
      },
      {
        heading: '8. Liability',
        body: `Liability for any indirect damages and consequential losses is fully excluded. Liability for direct damages is unlimited.\n\nAll liability for auxiliary persons is fully excluded.`,
      },
      {
        heading: '9. Intellectual Property',
        body: `All rights to content on this website (texts, images, logos) belong exclusively to Nikola Mrsic or he is authorised to use them. Any further use without express written consent is prohibited.`,
      },
      {
        heading: '10. Confidentiality',
        body: `Both parties undertake to treat all information received in connection with a transaction as confidential. This obligation survives the conclusion or termination of any transaction.`,
      },
      {
        heading: '11. Force Majeure',
        body: `If fulfilment is rendered impossible by force majeure (natural disasters, war, terrorism, pandemic, government measures, etc.), the company is released from its obligations for the duration of the event. If force majeure persists for more than 30 days, either party may withdraw from the transaction. Any payments already made will be refunded in full.`,
      },
      {
        heading: '12. Severability',
        body: `Should any provision of these GTC be or become invalid, the validity of the remaining provisions is unaffected. The invalid provision will be replaced by a valid provision that most closely achieves the intended economic purpose.`,
      },
      {
        heading: '13. Amendments',
        body: `These GTC may be amended by the company at any time. The new version takes effect 30 days after publication on the website. Completed transactions are governed by the version in force at the time of the transaction.`,
      },
      {
        heading: '14. Governing Law / Jurisdiction',
        body: `These GTC are governed by Swiss law. Place of jurisdiction is Schaffhausen, Switzerland. The UN Convention on Contracts for the International Sale of Goods (CISG) is expressly excluded.\n\nFor questions: kontakt@termin8.ch`,
      },
    ],
  },
}

export default function AgbPage() {
  const { lang } = useLang()
  const c = content[lang]

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <p className={styles.updated}>{c.updated}</p>
          <h1 className={styles.title}>{c.title}</h1>
          <p className={styles.subtitle}>{c.subtitle}</p>
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
