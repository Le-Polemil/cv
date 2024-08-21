import { useQuery } from "@apollo/client"
import { t } from "i18next"
import { Fragment } from "react"
import Project from "../../components/Project"
import { GET_PROJECTS, ProjectsDataType } from "../../queries/projects"

export default function Projects() {
  const { data } = useQuery<ProjectsDataType>(GET_PROJECTS)

  const projects = data?.projects?.data ?? []

  return (
    <div className="mb-6">
      <h1 className="mb-6 md:mb-12">
        <span className="highlight md:px-1.5">{t("tab.projects")}</span>
      </h1>

      <div className="flex flex-col gap-12 md:gap-20">
        {projects?.length > 0 &&
          projects.map((project, index) => (
            <Fragment key={project.id}>
              <Project {...project} />
              {index < projects.length - 1 && (
                <div className="md:hidden border-b-2 border-rose-400 mx-10" />
              )}
            </Fragment>
          ))}
      </div>
    </div>
  )
}
