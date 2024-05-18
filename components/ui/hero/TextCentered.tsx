import ElevatorPitchButton from "../button/ElevatorPitchButton"
import AboutMeButton from "../button/AboutMeButton"
import ConsultationButton from "../button/ConsultationButton"
import ThreeDCardGrid from "../card/ThreeDCardGrid"
import { techStack } from "@/site-copy/webDevPage"

interface TextCenteredProps {
  header: string,
  description: string
}

export default function TextCentered({ header, description }: TextCenteredProps) {
  return (
      <section className="bg-gradient-to-r from-cyan-300 to-violet-300 lg:pt-28 pb-12 pt-8 md:pt-36 border-b border-black">
        <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-zinc-900 md:text-5xl lg:text-6xl">{header}</h1>
        <p className="mb-8 text-lg font-normal text-zinc-800 lg:text-xl sm:px-16 xl:px-48">{description}</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <AboutMeButton />
            <ElevatorPitchButton />
        </div>
        <h2 className="text-gray-900 text-2xl mb-6">Built With ❤️ Using</h2>
        <ThreeDCardGrid 
          techStacks={techStack}
        />
    </div>
</section>
  )
}
