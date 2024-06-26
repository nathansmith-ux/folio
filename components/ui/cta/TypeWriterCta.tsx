"use client";
import AboutMeButton from "../button/AboutMeButton";
import ContactButton from "../button/ContactButton";
import ThreeDCardGrid from "../card/ThreeDCardGrid";
import { TypewriterEffectSmooth } from "./TypeWriterCtaHelper";
import { techStacks } from "@/site-copy/seoPage";

interface Word {
  text: string;
  className?: string;
}

interface TypeWriterCtaProps {
  subtext: string
  words: Word[];
  cards: boolean
  secondButton: boolean
  usedAsCta: boolean
}

export function TypeWriterCta({ 
  subtext, words, cards, secondButton, usedAsCta
}: TypeWriterCtaProps
) {
  return (
    <div className={`flex flex-col items-center justify-center my-4 pt-16 ${usedAsCta ? 'lg:py-32' : 'lg:pt-60'}`}>
      <p className="text-neutral-600 text-xs sm:text-base  ">
        {subtext}
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <ContactButton 
          text="Let's Talk About Your Business" 
          link="/seo"
        />
        {secondButton && (<AboutMeButton />)}
      </div>
      {cards && (
        <section className="mt-24 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-5">Our SEO Tech Stack</h2>
          <ThreeDCardGrid 
            techStacks={techStacks}
          />
        </section>
      )}
    </div>
  );
}
