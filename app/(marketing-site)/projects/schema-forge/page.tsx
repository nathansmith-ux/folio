import { AuroraBackground } from "@/components/ui/background/AuraBackground";
import CardGrid from "@/components/ui/card/CardGrid";
import { services } from "@/site-copy/schemaForgePage";
import HeroWImage from "@/components/ui/hero/HeroWImage";

export default function SchemaForgePage() {
  return (
    <main>
      <div className="pt-28">
        <HeroWImage 
          image="/schema-forge-assets/coloredLogo.png"
          header="Meet Schema Forge"
          description="Schema Forge is a SaaS company dedicated to streamline the process of creating and deploying schema markup to enhance your website's organic keyword rankings"
          ctaOne="Vist Our Website"
          ctaTwo="Generate A Markup"
          linkOne="https://schemaforge.io/"
          linkTwo="https://schemaforge.io/schema-generator"
        />
      </div>
      <div className="bg-gradient-to-r from-zinc-900 to-zinc-700 py-20 lg:px-20 md:px-10">
        <CardGrid 
          header="The Project's Tech Stack"
          services={services}
        />
      </div>
    </main>
  )
}