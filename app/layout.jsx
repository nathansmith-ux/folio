import { Inter } from "next/font/google";
import "./globals.css";
import { AI } from "./api/home/action";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "White Walls Media",
  description: "Meet your next partner for AI, Web Development and SEO projects",
};

export default function RootLayout({
  children
}) {
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
