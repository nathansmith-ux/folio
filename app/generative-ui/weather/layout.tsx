import { AI } from "@/app/api/weather/action"

export default function WeatherLayout({
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
