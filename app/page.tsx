import { SiteHeader } from "@/components/site-header"
import { HeroPlaceholder } from "@/components/hero-placeholder"
import { ClientsCarousel } from "@/components/clients-carousel"
import { PortfolioSection, ServicosSection, SobreMimSection, AvaliacoesSection } from "@/components/sections"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroPlaceholder />
        <ClientsCarousel />
        <PortfolioSection />
        <ServicosSection />
        <SobreMimSection />
        <AvaliacoesSection />
      </main>
      <ContactFooter />
    </>
  )
}
