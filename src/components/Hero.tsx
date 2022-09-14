import { GithubLogo, CaretDown, DownloadSimple } from 'phosphor-react'
import illustration from './assets/illustration-hero.svg'

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-20 xl:gap-40 !container">
        <img
          src={illustration}
          className="max-w-full md:max-w-lg"
          alt="Profile image"
        />
        <div>
          <h1 className="text-5xl font-bold flex items-end leading-none gap-2">
            I&apos;m Luiz{' '}
            <a
              href="https://github.com/luizsdev"
              target="_blank"
              rel="noreferrer"
              className="link link-primary mb-2"
            >
              <GithubLogo size={20} />
            </a>
          </h1>

          <p className="py-6">
            I&apos;m a back-end developer based in Brazil...
          </p>
          <div className="flex gap-2">
            <a
              href="#projects"
              className="btn btn-primary btn-sm md:btn-md flex justify-center items-center"
            >
              See Projects{' '}
              <CaretDown size={18} className="animate-bounce ml-1" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1IpdQoBrjxitBVJnm21hKMWpjVLYjRj3u"
              className="btn btn-secondary btn-sm md:btn-md flex justify-center items-center"
            >
              <DownloadSimple  size={18} className="mr-1"  /> Download CURRICULO
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
