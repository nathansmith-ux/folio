"use client";

import { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navigation/NavBarHelper";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import ContactButton from "../button/ContactButton";

export default function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      // Check the current scroll position
      // If it's greater than last scroll position, user is scrolling down
      if (window.scrollY > lastScrollY) {
        setVisible(false); // Hide the navbar
      } else {
        setVisible(true); // Show the navbar
      }
      // Update the last scroll position to the current scroll position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar]);

  return (
    <div
      className={cn("fixed inset-x-0 max-w-2xl mx-auto z-50 transition-transform duration-700", visible ? "translate-y-5" : "-translate-y-full", className)}
    >
      <Menu setActive={setActive}>
        <Link
          href="/"
          className="hover:text-slate-400"
        >
          <Image
            src="/whitewalls.webp"
            height="45"
            width="45"
            className="rounded-full"
            alt="A logo of a maze against white"
          />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/schema-markup">Schema Markup</HoveredLink>

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Generative UI">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Weather"
              href="/generative-ui/weather"
              src="/navigation-assets/weather.webp"
              description="Visualizes real-time weather patterns and forecasts interactively."
            />
            <ProductItem
              title="Biology"
              href="/generative-ui/biology"
              src="/navigation-assets/biology.webp"
              description="Displays biological systems from cellular to ecosystem levels dynamically"
            />
            <ProductItem
              title="Chemistry"
              href="/generative-ui/chemistry"
              src="/navigation-assets/chemistry.webp"
              description="Simulates chemical reactions and molecular structures in real-time"
            />
            <ProductItem
              title="Physics"
              href="/generative-ui/physics"
              src="/navigation-assets/physics.webp"
              description="Provides interactive simulations of physical phenomena, from quantum to astrophysics"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="TaiL"
              href="/projects/tail"
              src="/tail-assets/what-is-tail.webp"
              description="A generative AI platform that creates dynamic choose your own adventures games"
            />
            <ProductItem
              title="Schema Forge"
              href="/projects/schema-forge"
              src="/schema-forge-assets/schema-forge.webp"
              description="A SaaS product built to help SEOs generate structured data more efficiently"
            />
          </div>
        </MenuItem>
        <Link
          href="/blog"
          className="hover:text-slate-400"
        >
          Blog
        </Link>
        <ContactButton 
          link="https://calendly.com/nathanrmsmith/30min"
        />
      </Menu>
    </div>
  );
}
