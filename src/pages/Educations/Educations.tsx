import { Fragment } from "react"
import Education from "../../components/Education"
import { EducationsDataType, GET_EDUCATIONS } from "../../queries/educations"
import { useQuery } from "@apollo/client"
import { useTranslation } from "react-i18next"

export default function Educations() {
  const [t] = useTranslation()
  const { data } = useQuery<EducationsDataType>(GET_EDUCATIONS)

  const educations = data?.educations?.data ?? []

  return (
    <div className="mb-6">
      <h1
        className="mb-6 md:mb-12 overflow-hidden text-ellipsis"
        title={t("tab.educations") ?? "Formations"}
      >
        <span className="highlight md:px-1.5">{t("tab.educations")}</span>
      </h1>

      <div className="flex flex-col gap-12 md:gap-16">
        {educations?.length > 0 &&
          educations.map((education, index) => (
            <Fragment key={education.id}>
              <Education {...education} />
              {index < educations?.length - 1 && (
                <div className="md:hidden border-b-2 border-rose-400 mx-10" />
              )}
            </Fragment>
          ))}
      </div>
    </div>
  )
}
