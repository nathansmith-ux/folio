import ConsultationButton from "../button/ConsultationButton"
import ElevatorPitchButton from "../button/ElevatorPitchButton"

interface CtaTextProps {
  header: string,
  description: string
}

export default function CtaText({ header, description }: CtaTextProps) {
  return (
    <section className="w-full py-32">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 mx-auto">
        <div className="space-y-3">
          <div className="flex justify-center">
          </div>
          <h2 className="text-3xl text-zinc-900 font-bold text-center tracking-tighter md:text-4xl/tight">{header}</h2>
          <p className="text-zinc-900 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
        <div className="flex justify-center flex-colgap-2 min-[400px]:flex-row">
          <ElevatorPitchButton />
        </div>
      </div>
    </section>
  )
}

