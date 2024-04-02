import { AI } from "@/app/api/biology/action"

export default function BiologyLayout({
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
