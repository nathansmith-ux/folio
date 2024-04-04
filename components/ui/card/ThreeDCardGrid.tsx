import { ThreeDCard } from "./ThreeDCard";

interface ThreeDCardGridProps {
  techStacks: string[];
}

export default function ThreeDCardGrid({ techStacks }: ThreeDCardGridProps) {
  return (
    <div>
      <section className="lg:mx-72 md:mx-10 gap-2 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
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
