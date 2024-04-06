import CardIcon from "./CardIcon"

interface ProcessStep {
  title: string;
  description: string;
  icon: string
}

interface CardIconGridProps {
  process: ProcessStep[];
  header: string
}

export default function CardIconGrid({ process, header }: CardIconGridProps) {
  return (
    <div className="my-20 md:mx-10 lg:mx-20">
      <h2 className="text-5xl font-bold mb-8 ml-2">{header}</h2>
      <section className="mx-4 gap-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
        {process.map((individualProcess: ProcessStep, index: number) => (
          <CardIcon 
            key={index}
            header={individualProcess.title}
            description={individualProcess.description}
            icon={individualProcess.icon}
          />
        ))}
      </section>
  </div>
  )
}