import { AuroraBackground } from "@/components/ui/background/AuraBackground"
import CardIconGrid from "@/components/ui/card/CardIconGrid"
import HeroWImage from "@/components/ui/hero/HeroWImage"
import { process } from "@/site-copy/tailPage"

export default function TailPage() {
  return (
    <main>
      <HeroWImage 
        image="/tail-assets/what-is-tail.webp"
        header="Meet TaiL"
        description="TaiL is an AI platform designed to create dynamic and unique choose your own adventure games. We turn readers into players"
        ctaOne="Play Today"
        ctaTwo="Stay Up To Date With The Project"
        linkOne="https://www.tail-adventures.com"
        linkTwo="https://www.linkedin.com/company/tail-adventures/"
      />
      <AuroraBackground>
        <CardIconGrid 
          header="The Project's Tech Stack"
          process={process}
        />
      </AuroraBackground>
    </main>
  )
}

