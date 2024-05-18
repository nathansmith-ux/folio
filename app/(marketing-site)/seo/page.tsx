import { AuroraBackground } from "@/components/ui/background/AuraBackground"
import CardGrid from "@/components/ui/card/CardGrid"
import CardIconGrid from "@/components/ui/card/CardIconGrid"
import CtaImage from "@/components/ui/cta/CtaImage"
import CtaText from "@/components/ui/cta/CtaText"
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta"
import HeroWBullets from "@/components/ui/hero/HeroWBullets"
import { words, services, process, bulletPoints } from "@/site-copy/seoPage"

export default function SeoPage() {
  return (
    <main>
      <AuroraBackground>
        <TypeWriterCta
          subtext="Start Your Organic Journey Today" 
          words={words}
          cards={true}
          secondButton={true}
          usedAsCta={false}
        />
      </AuroraBackground>
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 py-28 lg:px-20 md:px-10">
        <CardGrid 
          header="The Services That We Provide"
          services={services}
        />
      </div>
      <AuroraBackground>
        <CardIconGrid
          header="Our Process" 
          process={process}
        />
      </AuroraBackground>
      <div className="bg-gradient-to-r from-violet-400 to-rose-400">
        <CtaText 
          header="Are You Ready To Take Your Business To The Digital World?"
          description="Let's carve out a piece of the internet for your business"
        />
      </div>
    </main>
  )
}