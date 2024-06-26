import CardGrid from "@/components/ui/card/CardGrid";
import TextCentered from "@/components/ui/hero/TextCentered";
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta";
import CtaImage from "@/components/ui/cta/CtaImage";
import CardIconGrid from "@/components/ui/card/CardIconGrid";
import HeroWBullets from "@/components/ui/hero/HeroWBullets";
import { AuroraBackground } from "@/components/ui/background/AuraBackground";
import { bulletPoints, words, services, process } from "@/site-copy/webDevPage";

export default function WebDevPage() {  
  return (
    <main>
      <TextCentered 
        header="You've Established Your Vision. We'll Develop It to Scale"
        description="We develop end-to-end solutions for small business owners to help you carve out your piece of the digital world"
      />
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 py-20 lg:px-20 md:px-10">
        <CardGrid 
          header="The Services That We Provide"
          services={services}
        />
      </div>
      <CardIconGrid 
        header="Our Process"
        process={process}
      />
      <AuroraBackground>
        <TypeWriterCta
          subtext="The road to a new digitial reach starts here" 
          words={words}
          cards={false}
          secondButton={false}
          usedAsCta={true}
        />
      </AuroraBackground>
    </main>
  )
}