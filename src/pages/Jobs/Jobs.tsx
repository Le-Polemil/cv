import { Fragment } from "react"
import Job from "../../components/Job"
import { JOBS_LIST } from "../../constants"

export default function Jobs() {
  return (
    <div className="mb-6">
      <h1 className="mb-6 md:mb-12">
        <span className="highlight md:px-1.5">Exp. Pros</span>
      </h1>

      <div className="flex flex-col gap-12 md:gap-24">
        {JOBS_LIST.map((job, index) => (
          <Fragment key={job.title + job.company}>
            <Job {...job} />
            {index < JOBS_LIST.length - 1 && (
              <div className="md:hidden border-b-2 border-rose-400 mx-10" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
