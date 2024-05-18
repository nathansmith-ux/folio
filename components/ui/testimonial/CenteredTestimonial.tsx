interface CenteredTestimonialProps {
  header: string;
  name: string;
  titleCompany: string;
}

export default function CenteredTestimonial({ header, name, titleCompany } : CenteredTestimonialProps) {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-zinc-900 to-zinc-700">
      <section className="grid grid-cols-2">
        <div className="container px-4 md:px-6 mx-auto flex items-center">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <blockquote className="text-xl text-white font-semibold leading-tight md:text-2xl lg:text-3xl">
              <h2>
              {header}
              </h2>
            </blockquote>
            <div className="space-y-1">
              <div className="font-semibold text-white"><p>{name}</p></div>
              <div className="text-white"><p>{titleCompany}</p></div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <video className="rounded-lg -translate-y-3 -translate-x-3" controls>
          <source src="testimonial.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </section>
  )
}