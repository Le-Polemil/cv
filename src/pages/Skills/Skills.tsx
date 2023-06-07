import { useQuery } from "@apollo/client"
import { GET_STACK, StackDataType } from "../../queries/stack"
import { useTranslation } from "react-i18next"

export default function Skills() {
  const [t] = useTranslation()
  const { data } = useQuery<StackDataType>(GET_STACK)

  const categories = data?.stackCategories?.data ?? []

  return (
    <div className="mb-6">
      <h1
        className="mb-6 md:mb-12 overflow-hidden text-ellipsis"
        title={t("tab.stack") ?? "Compétences"}
      >
        <span className="highlight md:px-1.5">{t("tab.stack")}</span>
      </h1>
      <div className="flex flex-col gap-y-14">
        {categories?.length > 0 &&
          categories.map((category, index) => (
            <div key={index} className="flex flex-col gap-y-12 md:gap-y-4">
              {category?.attributes?.subCategories?.length > 0 &&
                category.attributes.subCategories.map(({ name, skills }) => (
                  <div key={name}>
                    <h2 className="font-bold mb-1">{t(name)}</h2>

                    <div className="flex flex-wrap gap-y-2 gap-x-3">
                      {skills.map((skill) => (
                        <div
                          key={skill?.name}
                          className="bg-indigo-800 rounded-full px-3 py-1 whitespace-nowrap overflow-hidden text-ellipsis"
                        >
                          {skill?.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              {index < categories?.length - 1 && (
                <div className="md:hidden border-b-2 border-rose-400 mx-10" />
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
