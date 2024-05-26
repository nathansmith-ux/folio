"use client";
import { motion } from "framer-motion";
import { HeroHighlightHelper, Highlight } from "@/components/ui/hero/HeroHightlightHelper"
import ElevatorPitchButton from "../button/ElevatorPitchButton";
import WebDevButton from "../button/WebDevButton";

interface TextHighlightProps {
  normalText: string
  highlightedText: string
  paragraph?: boolean
  paragraphText?: string 
  ctas?: boolean
  secondNormalText? : string
}

export function TextHighlight({normalText, highlightedText, secondNormalText} : TextHighlightProps ) {
  return (
    <HeroHighlightHelper>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-3xl font-bold text-white max-w-7xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {normalText}
        <Highlight className="text-white">
          {highlightedText}
        </Highlight>
        {secondNormalText}
      </motion.h1>
    </HeroHighlightHelper>
  );
}
