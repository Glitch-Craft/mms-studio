import { SiteFooter } from '@/components/layout/site-footer'
import { AutomationSection } from '@/components/sections/automation-section'
import { BrandingSection } from '@/components/sections/branding-section'
import { ConsultancySection } from '@/components/sections/consultancy-section'
import { CreativeSection } from '@/components/sections/creative-section'
import { HeroSection } from '@/components/sections/hero-section'
import { MusicSection } from '@/components/sections/music-section'
import { Ticker } from '@/components/sections/ticker'
import { WebSection } from '@/components/sections/web-section'

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <Ticker />
        <MusicSection />
        <CreativeSection />
        <BrandingSection />
        <WebSection />
        <AutomationSection />
        <ConsultancySection />
      </main>
      <SiteFooter />
    </>
  )
}
