import { LocaleProvider } from '@/components/locale-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { WorkersSection } from '@/components/workers-section'
import { TimelineSection } from '@/components/timeline-section'
import { HowSection } from '@/components/how-section'
import { CtaFooter } from '@/components/cta-footer'

export default function Page() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <main>
        <Hero />
        <WorkersSection />
        <TimelineSection />
        <HowSection />
      </main>
      <CtaFooter />
    </LocaleProvider>
  )
}
