import { Fragment } from "react"
import Education from "../../components/Education"
import { EDUCATIONS_LIST } from "../../constants"

export default function Educations() {
  return (
    <div className="mb-6">
      <h1
        className="mb-6 md:mb-12 overflow-hidden text-ellipsis"
        title="Formations"
      >
        <span className="highlight md:px-1.5">Formations</span>
      </h1>

      <div className="flex flex-col gap-12 md:gap-16">
        {EDUCATIONS_LIST.map((education, index) => (
          <Fragment key={education.name}>
            <Education {...education} />
            {index < EDUCATIONS_LIST.length - 1 && (
              <div className="md:hidden border-b-2 border-rose-400 mx-10" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
