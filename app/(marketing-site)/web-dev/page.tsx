import CardGrid from "@/components/ui/card/CardGrid";
import TextCentered from "@/components/ui/hero/TextCentered";
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta";
import CtaImage from "@/components/ui/cta/CtaImage";
import CardIconGrid from "@/components/ui/card/CardIconGrid";
import HeroWBullets from "@/components/ui/hero/HeroWBullets";

export default function WebDevPage() {  
  return (
    <main>
      <TextCentered />
      <CardGrid />
      <CtaImage />
      <CardIconGrid />
      <HeroWBullets />
      <TypeWriterCta />
    </main>
  )
}