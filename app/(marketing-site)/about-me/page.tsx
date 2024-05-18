import HeroWImage from "@/components/ui/hero/HeroWImage";
import { AuroraBackground } from "@/components/ui/background/AuraBackground";
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta";
import { words } from "@/site-copy/seoPage"


export default function AboutMePage() {
  return (
    <main>
      <div className="lg:pt-28">
        <HeroWImage 
          image="/about-me/head-shot.jpeg"
          header="Hey! I'm "
          headerHighlighted="Nathan"
          description="Let me introduce myself, my name is Nathan and I am an SEO turned Web Developer. I have 3+ years of experience of SEO with over a year at a fully remote digital agency. This allows me to speak the language of both developers and SEOs as well as gives me unique insights into how to both build and optimize websites for organic search. Let's build websites that are easy to use and rank well together!"
          ctaOne="Connect On LinkedIn"
          ctaTwo="Connect On Github"
          linkOne="https://www.linkedin.com/in/nathan-smith-1a5814207/"
          linkTwo="https://github.com/nathansmith-ux"
        />
      </div>
      <AuroraBackground>
        <TypeWriterCta
          subtext="Start Your Organic Journey Today" 
          words={words}
          cards={false}
          secondButton={false}
          usedAsCta={true}
        />
      </AuroraBackground>
    </main>
  )
}
