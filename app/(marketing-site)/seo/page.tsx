import { AuroraBackground } from "@/components/ui/background/AuraBackground"
import CardGrid from "@/components/ui/card/CardGrid"
import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta"
import Footer from "@/components/ui/footer/Footer"
import NavBar from "@/components/ui/navigation/NavBar"
import { words, services } from "@/site-copy/seoPage"

export default function SeoPage() {
  return (
    <main>
      <NavBar />
      <AuroraBackground>
        <TypeWriterCta
          subtext="Start Your Organic Journey Today" 
          words={words}
          cards={true}
        />
      </AuroraBackground>
      <CardGrid 
        services={services}
      />
      <Footer />
    </main>
  )
}