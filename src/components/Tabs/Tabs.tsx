import { useQuery } from "@apollo/client"
import Tab from "../Tab"
import { useTranslation } from "react-i18next"
import { GET_TABS, TabsDataType } from "../../queries/tabs"

export default function Tabs() {
  const [t] = useTranslation()
  const { data } = useQuery<TabsDataType>(GET_TABS)

  const tabs = data?.tabs?.data ?? []

  return (
    <div className="tabs flex flex-row md:flex-col bg-purple-50 w-full h-20 md:w-24 xl:w-56 md:h-full md:px-0 md:py-10 shadow-around">
      {tabs?.length > 0 &&
        tabs.map((tab, index) => {
          const { attributes } = tab
          return (
            <Tab
              key={attributes.key}
              id={attributes.key}
              tabIndex={index}
              icon={attributes.icon}
              text={t(`tab.${attributes.key}`)}
            />
          )
        })}
    </div>
  )
}
