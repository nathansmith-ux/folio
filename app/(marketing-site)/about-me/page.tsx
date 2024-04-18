import HeroWImage from "@/components/ui/hero/HeroWImage";

export default function AboutMePage() {
  return (
    <main>
      <HeroWImage 
        image="/about-me/head-shot.jpeg"
        header="Meet Nathan Smith"
        description="TaiL is an AI platform designed to create dynamic and unique choose your own adventure games. We turn readers into players"
        ctaOne="Connect On LinkedIn"
        ctaTwo="Connect On Github"
        linkOne="https://www.linkedin.com/in/nathan-smith-1a5814207/"
        linkTwo="https://github.com/nathansmith-ux"
      />
    </main>
  )
}
