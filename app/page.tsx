import MobileNavBar from "@/components/ui/navigation/MobileNavBar";
import NavBar from "@/components/ui/navigation/NavBar";
import { HeroHighlight } from "@/components/ui/hero/HeroHighlight";
import TwoColGrid from "@/components/ui/grid/TwoColGrid";
import { AuroraBackground } from "@/components/ui/background/AuraBackground";
import Footer from "@/components/ui/footer/Footer";

// Copy
import { techStack, seoStack, pillars } from "@/site-copy/homepage";
import CenteredTestimonial from "@/components/ui/testimonial/CenteredTestimonial";
import HeroWithThreeSections from "@/components/ui/hero/HeroWithThreeSections";
import HeroWImage from "@/components/ui/hero/HeroWImage";

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <div className="block md:hidden lg:hidden">
          <MobileNavBar />
        </div>
        <div className="hidden md:block">
          <NavBar/>
        </div>
        {/* <AuroraBackground> */}
        <div className="lg:pt-64 lg:pb-14 bg-gradient-to-r from-zinc-900 to-zinc-700">
            <HeroHighlight 
              normalText="From Startup To Enterprise we're "
              highlightedText="Your Marketing Partner"
              paragraph={true}
              paragraphText="Need more than just a plugin agency? Meet the agency designed to take you from inception to enterprise. As you grow, we grow along side you."
              ctas={true}
            />
        </div>
        {/* </AuroraBackground> */}
        <div className="lg:pt-36 lg:pb-14 bg-gradient-to-r from-zinc-900 to-zinc-700">
          <CenteredTestimonial 
            name="Grace Su"
            titleCompany="Board Chair - Calgary Chinatown BIA"
          />
        </div>
        <div className="lg:py-14">
          <TwoColGrid 
            h2="What Sets Us Apart?"
            h3="Our Web Dev"
            h3Highlighted=" Capabilities"
            h3Second="Our SEO"
            h3SecondHighlighted=" Specialties"
            description="We're SEOs at heart but web developers by trade. Blending our unique expertise allows us to build websites from the ground up designed to scale as your business grows."
            secondDescription="Instead of conducting 10 technical audits after your site has launch, rest assured we will build it right the first time. Whether you choose to continue working with us, we will always make sure your site is well designed, built and managed."
            techStack={techStack}
            seoStack={seoStack}
          />
        </div>
        <div className="lg:py-14">
          <HeroWithThreeSections 
            header="The Three Pillars That "
            headerEmphasized="Drive Us Forward"
            bulletPoints={pillars}
          />
        </div>
        <div className="lg:pt-14">
          <HeroWImage 
            image="/about-me/head-shot.jpeg"
            header="Let&apos;s Be "
            headerHighlighted="Transparent"
            description="My name is Nathan and I am an SEO turned Web Developer with over 3 years of experience actively growing website's SEO. This allows me to speak the language of both developers and SEOs and gives me unique insights into how to both build and optimize websites for organic search."
            ctaOne="Connect On LinkedIn"
            ctaTwo="Connect On Github"
            linkOne="https://www.linkedin.com/in/nathan-smith-1a5814207/"
            linkTwo="https://github.com/nathansmith-ux"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
