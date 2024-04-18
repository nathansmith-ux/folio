import Footer from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/navigation/NavBar";
import MobileNavBar from "@/components/ui/navigation/MobileNavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
      <div className="block md:hidden lg:hidden">
        <MobileNavBar />
      </div>
      <div className="hidden md:block">
        <NavBar/>
      </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
