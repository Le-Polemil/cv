import { useQuery } from "@apollo/client"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import Job from "../../components/Job"
import { GET_JOBS, JobsDataType } from "../../queries/jobs"

export default function Jobs() {
  const [t] = useTranslation()
  const { data } = useQuery<JobsDataType>(GET_JOBS)

  const jobs = data?.jobs?.data ?? []

  return (
    <div className="mb-6">
      <h1 className="mb-6 md:mb-12">
        <span className="highlight md:px-1.5">{t("tab.timeline")}</span>
      </h1>

      <div className="flex flex-col-reverse gap-12 md:gap-24">
        {jobs?.length > 0 &&
          jobs.map((job, index) => (
            <Fragment key={job.attributes.title + job.attributes.company}>
              <Job {...job} />
              {index < jobs.length - 1 && (
                <div className="md:hidden border-b-2 border-rose-400 mx-10" />
              )}
            </Fragment>
          ))}
      </div>
    </div>
  )
}
