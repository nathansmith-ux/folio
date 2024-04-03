import ElevatorPitchButton from "../button/ElevatorPitchButton"
import AboutMeButton from "../button/AboutMeButton"
import ConsultationButton from "../button/ConsultationButton"
import ThreeDCardGrid from "../card/ThreeDCardGrid"
import { techStack } from "@/site-copy/webDevPage"

export default function TextCentered({ header, description }: { header:string, description: string }) {
  return (
      <section className="bg-orange-100 pt-44 pb-12 lg:pt-20 md:pt-36 border-b border-black">
    <div className="px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <ConsultationButton />
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">{header}</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">{description}</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <AboutMeButton />
            <ElevatorPitchButton />
        </div>
        <h2 className="text-gray-900 text-2xl mb-6">Built With Love Using</h2>
        <ThreeDCardGrid 
          techStacks={techStack}
        />
    </div>
</section>
  )
}
