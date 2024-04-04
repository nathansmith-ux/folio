import CardIconGrid from "@/components/ui/card/CardIconGrid"
import Footer from "@/components/ui/footer/Footer"
import HeroWImage from "@/components/ui/hero/HeroWImage"
import NavBar from "@/components/ui/navigation/NavBar"
import { process } from "@/site-copy/tailPage"

export default function TailPage() {
  return (
    <main>
      <NavBar />
      <HeroWImage 
        image="/tail-assets/what-is-tail.webp"
        header="Meet TaiL"
        description="TaiL is an AI platform designed to create dynamic and unique choose your own adventure games. We turn readers into players"
        ctaOne="Play Today"
        ctaTwo="How It Was Built"
        linkOne="https://www.tail-adventures.com"
        linkTwo="/blog"
      />
      <CardIconGrid 
        process={process}
      />
      <Footer />
    </main>
  )
}

