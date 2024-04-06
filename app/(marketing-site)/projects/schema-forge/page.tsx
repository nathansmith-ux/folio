import TextCentered from "@/components/ui/hero/TextCentered";
import { AuroraBackground } from "@/components/ui/background/AuraBackground";
import CardGrid from "@/components/ui/card/CardGrid";
import CtaText from "@/components/ui/cta/CtaText";
import { services } from "@/site-copy/schemaForgePage";
import HeroWImage from "@/components/ui/hero/HeroWImage";

export default function SchemaForgePage() {
  return (
    <main>
      <TextCentered 
        header="You've Established Your Vision. We'll Develop It to Scale"
        description="We develop end-to-end solutions for small business owners to help you carve out your piece of the digital world"
      />
      <AuroraBackground>
        <CardGrid 
          header="The Project's Tech Stack"
          services={services}
        />
      </AuroraBackground>
      <HeroWImage 
        image="/tail-assets/what-is-tail.webp"
        header="Meet TaiL"
        description="TaiL is an AI platform designed to create dynamic and unique choose your own adventure games. We turn readers into players"
        ctaOne="Play Today"
        ctaTwo="How It Was Built"
        linkOne="https://www.tail-adventures.com"
        linkTwo="/blog"
      />
      <CtaText 
        header="Are You Ready To Take Your Business To The Digital World?"
        description="Let's carve out a piece of the internet for your business"
      />
    </main>
  )
}