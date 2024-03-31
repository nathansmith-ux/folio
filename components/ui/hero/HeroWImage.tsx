import Image from "next/image"
import Link from "next/link"

export default function HeroWImage({ image, header, description, ctaOne, ctaTwo, linkOne, linkTwo }: { 
  image: string
  header: string,
  description: string,
  ctaOne: string,
  ctaTwo: string,
  linkOne: string,
  linkTwo: string,
}) {
  return (
    <section className="w-full py-12">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">{header}</h1>
            <p className="text-gray-500 dark:text-gray-400">{description}
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href={linkOne}
              >
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                  {ctaOne}
                </button>
              </Link>
              <Link
                href={linkTwo}
              >
                <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                  {ctaTwo}
                </button>
              </Link>
            </div>
          </div>
          <div className="aspect-wrapper aspect-square rounded-xl overflow-hidden lg:aspect-none lg:rounded-lg">
            <Image
              alt="Hero image"
              className="aspect object-cover"
              height="600"
              src={image}
              style={{
                aspectRatio: "600/600",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

