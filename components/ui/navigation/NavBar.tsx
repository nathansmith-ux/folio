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
      className={cn("fixed inset-x-0 max-w-4xl mx-auto z-50 transition-transform duration-700", visible ? "translate-y-5" : "-translate-y-full", className)}
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
          <div className="flex flex-col space-y-4 text-sm p-4 rounded-lg">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Generative UI">
          <div className="text-sm grid grid-cols-2 gap-10 p-4 rounded-lg">
            <ProductItem
              title="Cyber Security"
              href="/generative-ui/cyber-security"
              src="/navigation-assets/cyber-security.webp"
              description="Check domain, url and file safety in real time, powered by VirusTotal."
            />
            <ProductItem
              title="Life Sciences"
              href="/generative-ui/life-sciences"
              src="/navigation-assets/life-science.webp"
              description="Displays biological systems from cellular to ecosystem levels dynamically"
            />
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Projects & Portfolio">
          <div className="text-sm grid grid-cols-2 gap-10 p-4 rounded-lg">
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
            {/* <ProductItem
              title="SEO Work"
              href="/projects/seo"
              src="/portfolio/seo-work.webp"
              description="A SaaS product built to help SEOs generate structured data more efficiently"
            />
            <ProductItem
              title="Web Development Projects"
              href="/projects/web-dev"
              src="/portfolio/webdev-work.webp"
              description="A SaaS product built to help SEOs generate structured data more efficiently"
            /> */}
          </div>
        </MenuItem>
        <Link
          href="/about-me"
        >
          About Me
        </Link>
        <ContactButton 
          link="https://calendly.com/nathanrmsmith/30min"
        />
      </Menu>
    </div>
  );
}
