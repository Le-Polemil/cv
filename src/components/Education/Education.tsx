import { useTranslation } from "react-i18next"
import { EducationsDataType } from "../../queries/educations"

export default function Education({
  attributes,
}: EducationsDataType["educations"]["data"][0]) {
  const [t] = useTranslation()
  const { grade, name, yearStart, yearEnd, school, city } = attributes ?? {}

  return (
    <div>
      <div className="flex flex-wrap font-bold gap-x-10 md:gap-x-20">
        <h2>
          {grade} : {t(name)}
        </h2>

        <div className="text-amber-400 font-bold">
          {school} ({city})
        </div>
      </div>

      <div className="text-rose-400 mb-6">
        {yearStart} - {yearEnd}
      </div>
    </div>
  )
}
