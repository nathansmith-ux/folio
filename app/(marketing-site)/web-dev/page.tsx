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
      <AuroraBackground>
        <CardGrid 
          services={services}
        />
      </AuroraBackground>
      <CtaImage 
        header="Your Vision, Our Expertise - Let's Scale To New Heights Together"
        description="Transform your vision into reality with our expertise in web development – let's create your digital masterpiece together"
        image="/cta/cta-image.webp"
        color="bg-blue-500"
      />
      <CardIconGrid 
        header="Our Process"
        process={process}
      />
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