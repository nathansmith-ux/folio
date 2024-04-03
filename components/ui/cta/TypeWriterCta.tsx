"use client";
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
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-60 h-10 rounded-xl bg-green-500 hover:bg-green-400 border text-white text-sm">
          Schedule A 30 Min Consultation
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
