import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GoldBarImage from '@/components/GoldBarImage'
import TrustBadges from '@/components/TrustBadges'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GoldBarImage />
      <TrustBadges />
      <ContactForm />
      <Footer />
    </>
  )
}
