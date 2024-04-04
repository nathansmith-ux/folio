"use client";

import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { AuroraBackgroundHelper } from "@/components/ui/background/AuraBackgroundHelper";

interface AuroraBackgroundProps {
  children: ReactElement
}

export function AuroraBackground({ children }: AuroraBackgroundProps) {
  return (
    <AuroraBackgroundHelper>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        {children}
      </motion.div>
    </AuroraBackgroundHelper>
  );
}
