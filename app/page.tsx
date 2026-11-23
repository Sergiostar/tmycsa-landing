import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Brands } from '@/components/brands'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Brands />
        <Projects />
      </main>
      <Contact />
      <WhatsAppButton />
    </>
  )
}
