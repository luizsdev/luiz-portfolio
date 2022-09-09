import { GithubLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-10">
      <div className="footer container mx-auto">
        <div className="items-center grid-flow-col">
          <p>Luizsdev © 2022 - All rights reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="#"
            className="link link-secondary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterLogo size={24} />
          </a>
          <a
            href="https://github.com/luizsdev"
            className="link link-secondary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={24} />
          </a>
          <a
            href="#"
            className="link link-secondary transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramLogo size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}
