"use client";

import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navigation/NavBarHelper";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Generative UI">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Weather"
              href="/generative-ui/weather"
              src="/navigation-assets/weather.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Biology"
              href="/generative-ui/biology"
              src="/navigation-assets/biology.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Chemistry"
              href="/generative-ui/chemistry"
              src="/navigation-assets/chemistry.webp"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Physics"
              href="/generative-ui/physics"
              src="/navigation-assets/physics.webp"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <Link
          href="/tail"
          className="hover:text-slate-400"
        >
          Meet TaiL
        </Link>
      </Menu>
    </div>
  );
}
