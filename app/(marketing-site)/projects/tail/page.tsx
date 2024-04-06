import { AuroraBackground } from "@/components/ui/background/AuraBackground"
import CardIconGrid from "@/components/ui/card/CardIconGrid"
import HeroWImage from "@/components/ui/hero/HeroWImage"
import HeroWBullets from "@/components/ui/hero/HeroWBullets"
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta"
import { process, bulletPoints, words } from "@/site-copy/tailPage"

export default function TailPage() {
  return (
    <main>
      <HeroWImage 
        image="/tail-assets/what-is-tail.webp"
        header="Meet TaiL"
        description="TaiL is an AI platform designed to create dynamic and unique choose your own adventure games. We turn readers into players"
        ctaOne="Play Today"
        ctaTwo="How It Was Built"
        linkOne="https://www.tail-adventures.com"
        linkTwo="/blog"
      />
      <AuroraBackground>
        <CardIconGrid 
          header="The Project's Tech Stack"
          process={process}
        />
      </AuroraBackground>
      <HeroWBullets 
        image="/cta/minimalistic-hero.webp"
        header="Web Solutions for Small Businesses"
        description="Empowering small businesses with custom web applications designed for efficiency and growth"
        bulletPoints={bulletPoints}
      />
      <AuroraBackground>
        <TypeWriterCta
          subtext="The road to a new digitial reach starts here" 
          words={words}
          cards={false}
        />
      </AuroraBackground>
    </main>
  )
}

