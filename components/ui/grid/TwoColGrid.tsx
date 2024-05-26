import ContactButton from "../button/ContactButton";
import WebDevButton from "../button/WebDevButton";
import HoverCard from "../card/HoverCard";
import ScrollIcon from "../icons/ScrollingIcon";

interface TwoColGridProps {
  h2: string;
  description: string;
  secondDescription: string;
  h3: string;
  h3Highlighted: string;
  h3Second: string;
  h3SecondHighlighted: string;
  techStack: TechStack[]
  seoStack: TechStack[]
}

type TechStack = {
  h4: string;
  gradient: string;
  description: string;
}

export default function TwoColGrid({ h2, description, secondDescription, h3, h3Highlighted, h3Second, h3SecondHighlighted, techStack, seoStack }: TwoColGridProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">{h2}</h2>
          <p className="text-zinc-800 text-lg mb-2">
            {description}
          </p>
          <p className="text-zinc-800 text-lg">
            {secondDescription}
          </p>
          <div className="pt-8 flex">
            <div className="pr-4">
              <ContactButton
                text="Our SEO Services" 
                link="/seo"
              />
            </div>
            <div>
              <WebDevButton 
                text="Our Web Dev Services"
                link="/web-dev"
              />
            </div>
          </div>
          <div className="lg:pt-32">
            <div className="flex items-center">
              <ScrollIcon />
              <p className="ml-2 text-lg font-semibold	text-zinc-700">Hover To Reveal</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{h3}<span className="bg-gradient-to-r from-purple-400 to-cyan-500 text-transparent bg-clip-text">{h3Highlighted}</span></h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {techStack.map((tech, index) => (
              <HoverCard 
                key={index}
                h4={tech.h4}
                gradient={tech.gradient}
                description={tech.description}
              />
            ))}
          </div>
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-8">{h3Second}<span className="bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text">{h3SecondHighlighted}</span></h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {seoStack.map((tech, index) => (
              <HoverCard 
                key={index}
                h4={tech.h4}
                gradient={tech.gradient}
                description={tech.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

