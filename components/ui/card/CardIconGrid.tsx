import CardIcon from "./CardIcon"

export default function CardIconGrid() {
  return (
    <div className="my-20 py-20 md:mx-10 lg:mx-20">
      <h2 className="text-5xl font-bold mb-8 ml-2">Our Process</h2>
      <section className="mx-4 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        <CardIcon />
        <CardIcon />
        <CardIcon />
        <CardIcon />
      </section>
  </div>
  )
}