import HeroCarousel from '@/components/HeroCarousel'
import DirecteurSection from '@/components/DirecteurSection'
import StructuresSection from '@/components/StructuresSection'
import YaMkobeSection from '@/components/YaMkobeSection'
import AgendaSection from '@/components/AgendaSection'
import PartenairesSection from '@/components/PartenairesSection'
import { actualites } from '@/lib/data'

export const metadata = {
  title: 'CNDRS — Centre National de Documentation et de Recherche Scientifique',
  description: 'Le Centre National de Documentation et de Recherche Scientifique des Comores.',
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel actualites={actualites} />
      <DirecteurSection />
      <StructuresSection />
      <YaMkobeSection />
      <AgendaSection />
      <PartenairesSection />
    </>
  )
}