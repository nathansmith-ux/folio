import { AI } from "@/app/api/physics/action"

export default function PhysicsLayout({
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
