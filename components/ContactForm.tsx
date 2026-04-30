'use client'
import { useState, FormEvent } from 'react'
import Image from 'next/image'
import { useLang } from '@/lib/lang-context'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const { t } = useLang()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName:  (form.elements.namedItem('lastName')  as HTMLInputElement).value,
      email:     (form.elements.namedItem('email')     as HTMLInputElement).value,
      phone:     (form.elements.namedItem('phone')     as HTMLInputElement).value,
      message:   (form.elements.namedItem('message')   as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.label}>{t.formLabel}</div>
      <h2 className={styles.h2}>{t.formH2}</h2>
      <div className={styles.layout}>
        <div>
          <p className={styles.introText}>{t.formIntro}</p>
          <div className={styles.contactRow}>
            <div className={styles.contactIconLogo}>
              <Image src="/images/logo.svg" alt="Termin8" width={60} height={60} />
            </div>
            <div className={styles.contactText}>
              <strong>Termin8</strong><br />
              Löwengässchen 3<br />
              8200 Schaffhausen
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={`${styles.contactIconPlain} ${styles.emailIcon}`}>✉</div>
            <div className={styles.contactText}>kontakt@termin8.ch</div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.contactIconPlain}>📞</div>
            <div className={styles.contactText}>+41 52 624 25 25</div>
          </div>
        </div>
        <form className={styles.fields} onSubmit={handleSubmit} noValidate>
          <div className={styles.row2}>
            <input name="firstName" className={styles.input} type="text" placeholder={t.phFirstName} required />
            <input name="lastName"  className={styles.input} type="text" placeholder={t.phLastName}  required />
          </div>
          <input name="email"   className={styles.input} type="email" placeholder={t.phEmail}  required />
          <input name="phone"   className={styles.input} type="tel"   placeholder={t.phPhone} />
          <textarea name="message" className={`${styles.input} ${styles.textarea}`} placeholder={t.phMessage} required />
          {status === 'success' && <div className={`${styles.feedback} ${styles.feedbackSuccess}`}>{t.formSuccess}</div>}
          {status === 'error'   && <div className={`${styles.feedback} ${styles.feedbackError}`}>{t.formError}</div>}
          <button className={styles.submit} type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? '…' : t.formSubmit}
          </button>
        </form>
      </div>
    </section>
  )
}
