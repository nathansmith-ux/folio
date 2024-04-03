"use client";
import AboutMeButton from "../button/AboutMeButton";
import ElevatorPitchButton from "../button/ElevatorPitchButton";
import ThreeDCardGrid from "../card/ThreeDCardGrid";
import { TypewriterEffectSmooth } from "./TypeWriterCtaHelper";
import { techStacks } from "@/site-copy/seoPage";

export interface Word {
  text: string;
  className?: string;
}

interface TypeWriterCtaProps {
  subtext: string
  words: Word[];
  cards: boolean
}

export function TypeWriterCta({ 
  subtext, words, cards 
}: TypeWriterCtaProps
) {
  return (
    <div className="flex flex-col items-center justify-center my-4 py-32">
      <p className="text-neutral-600 text-xs sm:text-base  ">
        {subtext}
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <ElevatorPitchButton />
        <AboutMeButton />
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
