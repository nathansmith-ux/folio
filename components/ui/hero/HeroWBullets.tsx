import Image from "next/image"

export default function HeroWBullets() {
  return (
    <section className="w-full py-24 bg-orange-100 border border-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="/tail-assets/what-is-tail.webp"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The complete platform for building the Web
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and scale
                the best web experiences.
              </p>
            </div>
            <ul className="grid gap-4 md:gap-2 list-disc text-gray-500 dark:text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-900" />
                <span>Zero config</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-900" />
                <span>Instant deployment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-900" />
                <span>Edge functions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="inline-block h-4 w-4 rounded-full bg-gray-900" />
                <span>Collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

