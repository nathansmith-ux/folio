import { ThreeDCard } from "./ThreeDCard";

interface ThreeDCardGridProps {
  techStacks: string[];
}

export default function ThreeDCardGrid({ techStacks }: ThreeDCardGridProps) {
  return (
    <div>
      <section className="lg:mx-72 md:mx-10 gap-2 flex justify-center md:grid md:grid-cols-3">
        {techStacks.map((tech, index) => (
          <ThreeDCard 
            key={index}
            techStack={tech}
          />
        ))}
      </section>
    </div>
  );
}
