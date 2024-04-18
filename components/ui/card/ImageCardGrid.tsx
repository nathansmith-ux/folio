import ImageCard from "./ImageCard";

type Card = {
  header: string,
  description: string,
  image: string,
  link: string
}

interface ImageCardGridProps {
  header: string
  cardContent: Card[]
}

export default function ImageCardGrid({ header, cardContent }: ImageCardGridProps) {
  return (
    <div className="my-20 md:mx-10 lg:mx-20">
      <h2 className="text-5xl font-bold mb-8 ml-2">{header}</h2>
      <section className="mx-4 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        {cardContent.map(( card, index: number) => (
          <ImageCard
            key={index}
            header={card.header}
            description={card.description}
            image={card.image}
            link={card.link}
          />
        ))}
      </section>
  </div>
  )
}