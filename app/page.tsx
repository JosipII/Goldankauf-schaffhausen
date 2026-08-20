import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GoldBarImage from '@/components/GoldBarImage'
import GoldPriceTable from '@/components/GoldPriceTable'
import TrustBadges from '@/components/TrustBadges'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import SilverBesteck from '@/components/SilverBesteck'
import Footer from '@/components/Footer'
import { getGoldPrice, getSilverwarePrice } from '@/lib/gold-price'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [gold, silverware] = await Promise.all([getGoldPrice(), getSilverwarePrice()])

  return (
    <>
      <Navbar />
      <Hero />
      <GoldBarImage />
      <GoldPriceTable initialPrice={gold.price} initialUpdatedAt={gold.updatedAt} />
      <SilverBesteck initialPrice={silverware.price} initialUpdatedAt={silverware.updatedAt} />
      <TrustBadges />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </>
  )
}
