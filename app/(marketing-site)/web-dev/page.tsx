import CardGrid from "@/components/ui/card/CardGrid";
import TextCentered from "@/components/ui/hero/TextCentered";
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta";
import CtaImage from "@/components/ui/cta/CtaImage";
import CardIconGrid from "@/components/ui/card/CardIconGrid";
import HeroWBullets from "@/components/ui/hero/HeroWBullets";
import NavBar from "@/components/ui/navigation/NavBar";
import Footer from "@/components/ui/footer/Footer";
import { AuroraBackground } from "@/components/ui/background/AuraBackground";

export default function WebDevPage() {  
  return (
    <main>
      <NavBar />
      <TextCentered 
        header="You've Established Your Vision. We'll Develop It to Scale"
        description="We develop end-to-end solutions for small business owners to help you carve out your piece of the digital world"
      />
      <AuroraBackground>
        <CardGrid />
      </AuroraBackground>
      <CtaImage />
      <CardIconGrid />
      <HeroWBullets />
      <TypeWriterCta />
      <Footer />
    </main>
  )
}