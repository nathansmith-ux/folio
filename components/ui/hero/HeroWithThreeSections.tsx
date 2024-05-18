import Link from "next/link";
import Image from "next/image";

interface HeroWithThreeSectionsProps {
  header: string;
  headerEmphasized: string;
  bulletPoints: BulletPoint[];
}

type BulletPoint = {
  header: string;
  bulletPoint: string;
};

export default function HeroWithThreeSections({ header, headerEmphasized, bulletPoints }: HeroWithThreeSectionsProps) {
  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-r from-zinc-900 to-zinc-700">
      <div className="grid px-10 items-center gap-6 py-12 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col justify-center h-full">
          <div className="text-white mb-12">
            <h2 className="text-5xl lg:text-6xl mb-4 font-bold tracking-tighter">
              {header} <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-transparent bg-clip-text">{headerEmphasized}</span>
            </h2>
          </div>
          <ul className="grid gap-6">
            {bulletPoints.map((block, index) => (
              <li key={index}>
                <div className="grid gap-1 mb-6">
                  <h3 className="text-xl lg:text-3xl font-bold text-white">{block.header}</h3>
                  <p className="text-white">
                    {block.bulletPoint}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Image
          alt="Image of three greek pillars"
          className="mx-auto rounded-xl sm:w-full order-last md:order-first"
          height="310"
          src="/home/pillars.webp"
          width="550"
        />
      </div>
    </section>
  );
}
