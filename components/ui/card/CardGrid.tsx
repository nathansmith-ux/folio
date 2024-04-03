import { HoverEffect } from "./CardGridHelper";

export interface Service {
  title: string
  description: string
}

interface CardGridProps {
  services: Service[]
}

export default function CardGrid({ services }: CardGridProps) {
  return (
    <section className="my-20 lg:mx-20 md:mx-10">
      <h2 className="text-5xl ml-4 mb-2 font-bold">The Services That We Provide</h2>
      <HoverEffect 
        items={services}
      />
    </section>
  )
}