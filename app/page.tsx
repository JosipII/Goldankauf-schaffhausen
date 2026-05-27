import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GoldBarImage from '@/components/GoldBarImage'
import GoldPriceTable from '@/components/GoldPriceTable'
import TrustBadges from '@/components/TrustBadges'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import SilverBesteck from '@/components/SilverBesteck'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GoldBarImage />
      <GoldPriceTable />
      <SilverBesteck />
      <TrustBadges />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </>
  )
}
