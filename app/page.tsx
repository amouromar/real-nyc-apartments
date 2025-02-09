import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SearchSection from '@/components/SearchSection'
import PopularProperties from '@/components/PopularProperties'
import Features from '@/components/Features'
import FeaturedProperties from '@/components/FeaturedProperties'

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      <Navbar />
      <Hero />
      <SearchSection />
      <PopularProperties />
      <Features />
      <FeaturedProperties />
    </main>
  )
}