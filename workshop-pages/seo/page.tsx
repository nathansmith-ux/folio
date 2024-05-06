import { TypeWriterCta } from "@/components/ui/cta/TypeWriterCta"
import { words } from "@/site-copy/seoPage"

export default function SeoWorkPage() {
  return (
    <main className="pt-16">
      <TypeWriterCta
        subtext="Start Your Organic Journey Today" 
        words={words}
        cards={false}
        secondButton={true}
      />
    </main>
  )
}