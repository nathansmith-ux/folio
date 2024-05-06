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
        />
      </AuroraBackground>
      <CardGrid 
        header="The Services That We Provide"
        services={services}
      />
      <CtaImage 
        header="Let's Expand Your Business's Digital Reach - Together"
        description="Unleash your business's potential online, where our joint expertise and your vision come together to create a lasting digital impact."
        image="/seo-page/seo-services.webp"
        color="bg-pink-400"
      />
      <AuroraBackground>
        <CardIconGrid
          header="Our Process" 
          process={process}
        />
      </AuroraBackground>
      <HeroWBullets 
        image="/seo-page/seo-process.webp"
        header="SEO Services For Small Businesses"
        description="Elevate your small business in the digital world with our tailored SEO services, designed to enhance your online visibility, attract more traffic, and drive growth"
        bulletPoints={bulletPoints}
      />
      <CtaText 
        header="Are You Ready To Take Your Business To The Digital World?"
        description="Let's carve out a piece of the internet for your business"
      />
    </main>
  )
}