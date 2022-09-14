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
              My name is Luiz, I'm 18 years
              old, I'm at the beginning of
            my career and I'm open to
            any kind of opportunity, I
            really like to learn and teach
            when possible. I'm fluent in
            English and a Back-End
            student, and I'm looking for
            my first developer job.
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
