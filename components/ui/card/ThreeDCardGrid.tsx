import { ThreeDCard } from "./ThreeDCard"

export default function ThreeDCardGrid() {
  return (
    <div>
      <h2 className="text-gray-900 text-2xl mb-6">Built With Love Using</h2>
      <section className="lg:mx-72 md:mx-10 gap-2 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        <ThreeDCard 
          techStack="React"
        />
        <ThreeDCard 
          techStack="WebFlow"
        />
        <ThreeDCard 
          techStack="Shopify"
        />
      </section>
  </div>
  )
}