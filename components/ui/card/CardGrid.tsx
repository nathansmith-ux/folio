import { HoverEffect } from "./CardGridHelper";
import { services } from "@/site-copy/webDevPage";

export default function CardGrid() {
  return (
    <section className="pt-20 my-20 lg:mx-20 md:mx-10">
      <h2 className="text-3xl ml-4 mb-2">The Services That We Provide</h2>
      <p className="ml-4">I specialize in responsive design to provide a seamless user experiences</p>
      <HoverEffect 
        items={services}
      />
    </section>
  )
}