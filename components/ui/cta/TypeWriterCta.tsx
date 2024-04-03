"use client";
import AboutMeButton from "../button/AboutMeButton";
import ElevatorPitchButton from "../button/ElevatorPitchButton";
import { TypewriterEffectSmooth } from "./TypeWriterCtaHelper";

export function TypeWriterCta() {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "build",
    },
    {
      text: "amazing",
    },
    {
      text: "websites",
    },
    {
      text: "together.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem]  ">
      <p className="text-neutral-600 text-xs sm:text-base  ">
        The road to a new digitial reach starts here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <ElevatorPitchButton />
        <AboutMeButton />
      </div>
    </div>
  );
}
