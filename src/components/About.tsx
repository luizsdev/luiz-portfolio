import { UserPlus } from 'phosphor-react'

export const About = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200 container mx-auto"
      id="about-me"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 md:gap-4">
        <img
          src="https://github.com/luizsdev.png"
          className="rounded-lg shadow-2xl mask mask-squircle lg:mask-parallelogram"
          alt=""
        />
        <div className="max-w-full">
          <h1 className="text-5xl font-bold">About me</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <div className="flex gap-2">
            <a
              href="#contact-me"
              className="btn btn-primary flex justify-center items-center"
            >
              Contact Me <UserPlus size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
