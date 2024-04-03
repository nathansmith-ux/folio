import CardGrid from "@/components/ui/card/CardGrid";
import TextCentered from "@/components/ui/hero/TextCentered";
import NavBar from "@/components/ui/navigation/NavBar";
import Footer from "@/components/ui/footer/Footer";
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta";
import CtaImage from "@/components/ui/cta/CtaImage";
import CardIconGrid from "@/components/ui/card/CardIconGrid";

export default function WebDevPage() {  
  return (
    <main>
      <NavBar />
      <TextCentered />
      <CardGrid />
      <CtaImage />
      <CardIconGrid />
      <TypeWriterCta />
      <Footer />
    </main>
  )
}