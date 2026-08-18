import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GoldBarImage from '@/components/GoldBarImage'
import GoldPriceTable from '@/components/GoldPriceTable'
import TrustBadges from '@/components/TrustBadges'
import HowItWorks from '@/components/HowItWorks'
import ContactForm from '@/components/ContactForm'
import SilverBesteck from '@/components/SilverBesteck'
import Footer from '@/components/Footer'
import { getGoldPrice } from '@/lib/gold-price'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const { price, updatedAt } = await getGoldPrice()

  return (
    <>
      <Navbar />
      <Hero initialPrice={price} initialUpdatedAt={updatedAt} />
      <GoldBarImage />
      <GoldPriceTable initialPrice={price} />
      <SilverBesteck />
      <TrustBadges />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </>
  )
}
