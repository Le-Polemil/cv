import { Fragment } from "react"
import { PROJECTS_LIST } from "../../constants"
import Project from "../../components/Project"

export default function Projects() {
  return (
    <div className="mb-6">
      <h1 className="mb-6 md:mb-12">
        <span className="highlight md:px-1.5">Projets</span>
      </h1>

      <div className="flex flex-col gap-12 md:gap-20">
        {PROJECTS_LIST.map((project, index) => (
          <Fragment key={project.name}>
            <Project {...project} />
            {index < PROJECTS_LIST.length - 1 && (
              <div className="md:hidden border-b-2 border-rose-400 mx-10" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
