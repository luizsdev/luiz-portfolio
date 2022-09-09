import axios from 'axios'
import { useEffect, useState } from 'react'
import { Project } from './Project'
type TProject = {
  title: string
  description: string
  image: string
  tags: string[]
  id: string
}
export const Projects = () => {
  const [projects, setProjects] = useState<TProject[]>([] as TProject[])

  useEffect(() => {
    axios.get('http://localhost:3000/projects').then((response) => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <h1 className="text-5xl font-bold underline text-center mb-16">
        Projects
      </h1>
      <div
        className="container mx-auto flex flex-wrap justify-center gap-20"
        id="projects"
      >
        <div
          className="flex flex-wrap gap-10 xl:gap-20 justify-center"
          id="projects"
        >
          {projects.map((project) => (
            <Project
              key={project.title}
              projectTitle={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              mostRecent
            />
          ))}
          <Project projectTitle="API WITH NESTJS" mostRecent />
          <Project projectTitle="API WITH NESTJS" mostRecent />
          <Project projectTitle="API WITH NESTJS" mostRecent />
          <Project projectTitle="API WITH NESTJS" mostRecent />
        </div>
      </div>
    </>
  )
}
