import Image from "next/image"

interface HeroWBulletsProps {
  image: string,
  header: string,
  description: string,
  bulletPoints: string[]
}

export default function HeroWBullets({ image, header, description, bulletPoints 
}: HeroWBulletsProps) {
  return (
    <section className="w-full py-24 bg-blue-300 border border-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src={image}
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 mb-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
                {header}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                {description}
              </p>
            </div>
            <ul className="space-y-2 text-gray-500">
              {bulletPoints.map((point: string, index: number) => (
                <li 
                  className="flex items-start"
                  key={index}
                >
                  <span className="inline-block h-3 w-4 rounded-full bg-blue-500 mr-2"/>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

