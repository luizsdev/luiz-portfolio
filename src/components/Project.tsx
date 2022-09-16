import { GithubLogo, ArrowSquareOut } from 'phosphor-react'

interface ProjectProps {
  projectTitle?: string
  description?: string
  tags?: string[]
  mostRecent?: boolean
  image?: string
  link?: string
}

export const Project = ({
  mostRecent,
  projectTitle,
  description,
  tags,
  image,
  link
}: ProjectProps) => {
  return (
    <div className="card w-80 xl:w-[21rem] bg-base-100 shadow-xl">
      <figure>
        <img src={image ?? 'https://placeimg.com/400/225/arch'} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {projectTitle ?? 'API ...'}
          {mostRecent && <div className="badge badge-secondary">NEWEST</div>}
        </h2>
        <p>
          {description ??
            " A product system made with NestJS. It's a service where you list products, create products or even delete them."}
        </p>
        <div className="card-actions justify-end">
          {tags?.map((tag) => (
            <div key={tag} className="badge">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions justify-between items-center pt-6">
          <a
             href={link ?? 'https://github.com/luizsdev'}
            target="_blank"
            rel="noreferrer"
            className="link link-secondary transition-all"
          >
            <GithubLogo size={20} />
          </a>
          <button className="btn btn-primary btn-sm flex justify-center items-center gap-2">
            <ArrowSquareOut size={15} />
            Live Demo
          </button>
        </div>
      </div>
    </div>
  )
}
