import { List, X } from 'phosphor-react'
import { useState } from 'react'

export const Header = () => {
  const themes = ['light', 'cupcake'] as const
  // dracula as default
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar bg-base-100">
      <div className="flex justify-center items-center container mx-auto">
        <div className="flex-1">
          <pre data-prefix=">" className="text-warning text-3xl">
            <code className="flex items-start">
              {'>'} Luizs<span className="text-primary">dev</span>
              <p className="animate-cursor-blink">_</p>
            </code>
          </pre>
        </div>
        <div className="flex-none hidden sm:flex-none sm:flex">
          <ul className="menu menu-horizontal p-0 flex justify-center items-center gap-6">
            <a
              href="#about-me"
              className="link link-secondary font-bold no-underline"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="link link-secondary font-bold no-underline"
            >
              <a>Projects</a>
            </a>
            <div className="flex text-secondary justify-center items-center gap-2">
              
            </div>
          </ul>
        </div>
        <div className="flex-none flex sm:hidden">
          {isOpen ? (
            <X
              size={25}
              className="cursor-pointer transition-all"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <List
              size={25}
              className="cursor-pointer transition-all"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <div
          className={
            isOpen
              ? 'flex-none flex absolute right-0 top-12 py-10 px-20 z-20 rounded-3xl bg-base-300'
              : 'flex-none hidden'
          }
        >
          <ul className="menu menu-vertical p-0 flex justify-center items-center gap-6">
            <a
              href="#about-me"
              className="link link-secondary font-bold no-underline px-5 py-2"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="link link-secondary font-bold no-underline px-5 py-2"
            >
              <a>Projects</a>
            </a>
            <div className="flex text-secondary justify-center items-center gap-2 px-5 py-2">
              <select
                data-choose-theme
                className="select select-ghost outline-0 border-0 active:border-0 active:ring-0 focus:border-0 focus:ring-0"
              >
                <option value="dracula">Dracula</option>
                {themes.map((theme) => (
                  <option key={theme} value={theme}>
                    {theme}
                  </option>
                ))}
              </select>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}
