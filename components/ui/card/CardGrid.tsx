import { HoverEffect } from "./CardGridHelper";

export interface Service {
  title: string
  description: string
}

interface CardGridProps {
  services: Service[]
  header: string
}

export default function CardGrid({ services, header }: CardGridProps) {
  return (
    <section>
      <h2 className="text-5xl text-white ml-4 mb-2 font-bold">{header}</h2>
      <HoverEffect 
        items={services}
      />
    </section>
  )
}