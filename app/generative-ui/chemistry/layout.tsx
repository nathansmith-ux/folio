import { AI } from "@/app/api/chemistry/action"

export default function ChemistryLayout({
  children
} : Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AI>
          {children}
        </AI>
      </body>
    </html>
  );
}
