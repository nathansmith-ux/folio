import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { AI } from "@/app/api/weather/action"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "White Walls Media",
  description: "Meet your next partner for AI, Web Development and SEO projects",
};

export default function WeatherLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AI>
        <body className={inter.className}>
          {children}
        </body>
      </AI>
    </html>
  );
}
