import Image from "next/image";
import Link from "next/link";

interface HeroWImageProps {
  image: string;
  header: string;
  headerHighlighted?: string;
  description: string;
  ctaOne: string;
  ctaTwo: string;
  linkOne: string;
  linkTwo: string;
}

export default function HeroWImage({ image, header, headerHighlighted, description, ctaOne, ctaTwo, linkOne, linkTwo }: HeroWImageProps) {
  return (
    <section className="w-full lg:py-12">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight lg:text-5xl">
              {header} 
              {headerHighlighted && (
                <span className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
                  {headerHighlighted}
                </span>
              )}
            </h1>
            <p className="text-gray-500">{description}</p>
            <div className="flex gap-4 mt-6">
              <Link href={linkOne}>
                <button className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white hover:from-red-400 hover:to-yellow-300 hover:scale-110 hover:text-zinc-900 px-4 py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
                  {ctaOne}
                </button>
              </Link>
              <Link href={linkTwo}>
                <button className="bg-gradient-to-r from-zinc-900 to-zinc-700 text-white hover:from-red-400 hover:to-yellow-300 hover:scale-110 hover:text-zinc-900 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-gray-300">
                  {ctaTwo}
                </button>
              </Link>
            </div>
          </div>
          <div className="aspect-wrapper aspect-square rounded-xl overflow-hidden lg:aspect-none lg:rounded-lg">
            <Image
              alt="Hero image"
              className="aspect object-cover rounded-lg"
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
  );
}