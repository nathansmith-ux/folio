import HeroWImage from "@/components/ui/hero/HeroWImage"

export default function TailPage() {
  return (
    <main className="pt-24">
      <HeroWImage 
        image="/tail-assets/what-is-tail.webp"
        header="Meet TaiL"
        description="TaiL is an AI platform designed to create dynamic and unique choose your own adventure games. We turn readers into players"
        ctaOne="Play Today"
        ctaTwo="How It Was Built"
        linkOne="https://www.tail-adventures.com"
        linkTwo="/blog"
      />
    </main>
  )
}

