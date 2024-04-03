import { HoverEffect } from "./CardGridHelper";
import { services } from "@/site-copy/webDevPage";

export default function CardGrid() {
  return (
    <section className="pt-20 my-20 lg:mx-20 md:mx-10">
      <h2 className="text-5xl ml-4 mb-2 font-bold">The Services That We Provide</h2>
      <HoverEffect 
        items={services}
      />
    </section>
  )
}