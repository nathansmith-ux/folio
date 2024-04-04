import Image from "next/image"
import ElevatorPitchButton from "../button/ElevatorPitchButton"

interface CtaImageProps {
  header: string,
  description: string,
  image: string,
  color: string
}

function CtaImage({ header, description, image, color }: CtaImageProps) {
  return (
    <section className={`${color} py-20 md:px-10 border border-black`}>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image 
            className="w-full dark:hidden" 
            src={image}
            alt="dashboard image"
            width="350"
            height="350"
          />
          <Image 
            className="w-full hidden dark:block rounded-lg" 
            src={image}
            alt="dashboard image"
            width="350"
            height="350"
          />
          <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{header}</h2>
              <p className="mb-6 font-light text-gray-300 md:text-lg">{description}</p>
              <ElevatorPitchButton />
          </div>
      </div>
    </section>
  )
}

export default CtaImage
