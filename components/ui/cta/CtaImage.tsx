import Image from "next/image"
import Link from "next/link"
import ElevatorPitchButton from "../button/ElevatorPitchButton"

function CtaImage() {
  return (
    <section className="bg-blue-500 py-20 md:px-10 border border-black">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image 
            className="w-full dark:hidden" 
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" 
            alt="dashboard image"
            width="350"
            height="350"
          />
          <Image 
            className="w-full hidden dark:block" 
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" 
            alt="dashboard image"
            width="350"
            height="350"
          />
          <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
              <p className="mb-6 font-light text-gray-300 md:text-lg">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
              <ElevatorPitchButton />
          </div>
      </div>
    </section>
  )
}

export default CtaImage
