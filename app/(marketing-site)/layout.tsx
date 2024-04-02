import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/ui/navigation/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White Walls Media",
  description: "Meet your next partner for AI, Web Development and SEO projects",
};

export default function MarketingSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
