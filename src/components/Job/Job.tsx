import { useTranslation } from "react-i18next"
import { JobsDataType } from "../../queries/jobs"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"
dayjs.extend(localizedFormat)

export default function Job(job: JobsDataType["jobs"]["data"][0]) {
  const [t] = useTranslation()

  if (!job) return null

  const { attributes } = job
  const { title, company, companyDetails, dateStart, dateEnd, missions } =
    attributes ?? {}

  return (
    <div>
      <div className="flex flex-wrap font-bold gap-x-10 md:gap-x-20">
        <h2>{t(title)}</h2>

        <div className="text-amber-400 font-bold">
          {company} ({t(companyDetails)})
        </div>
      </div>

      <div className="capitalize text-rose-400 mb-6">
        {dateStart && dayjs?.(dateStart)?.format?.("MMMM YYYY")}
        {dateStart && dateEnd && " - "}
        {dateEnd && dayjs?.(dateEnd)?.format?.("MMMM YYYY")}
      </div>

      <ul className="list-disc pl-4">
        {missions.map((mission) => (
          <li key={mission?.id}>{t(mission?.key)}</li>
        ))}
      </ul>
    </div>
  )
}
