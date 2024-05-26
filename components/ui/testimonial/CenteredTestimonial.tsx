import { TextHighlight } from "../text/Highlight";
import Image from "next/image";

interface CenteredTestimonialProps {
  name: string;
  titleCompany: string;
}

export default function CenteredTestimonial({ name, titleCompany } : CenteredTestimonialProps) {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-zinc-900 to-zinc-700">
      <section className="grid grid-cols-2">
        <div className="container px-4 md:px-6 mx-auto flex items-center">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <blockquote className="text-xl text-white font-semibold leading-tight md:text-2xl lg:text-3xl">
            <h2>
              <TextHighlight 
              normalText="Nathan helped bring  "
              highlightedText="over 150 Chinese Merchants"
              secondNormalText=" into the digital age"
            />
              </h2>
            </blockquote>
            <div className="space-y-1">
              <div className="flex justify-center lg:mt-10 mb-2">
                <Image 
                  src="/whitewalls.webp"  
                  className="rounded-full"
                  height="60"
                  width="60"
                  alt="Profile pciture of Grace"
                />
              </div>
              <div>
                <div className="font-semibold text-white text-lg"><p>{name}</p></div>
                <div className="text-white text-lg italic"><p>{titleCompany}</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <video className="rounded-lg -translate-y-3 -translate-x-3" width="640" height="360" controls>
          <source src="testimonial.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </section>
  )
}