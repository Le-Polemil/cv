import { TABS_LIST } from "../../constants"
import Tab from "../Tab"

export default function Tabs() {
  return (
    <div className="tabs flex flex-row md:flex-col bg-purple-50 w-full h-20 md:w-24 lg:w-36 xl:w-56 md:h-full md:px-0 md:py-10 shadow-around">
      {TABS_LIST.map((tab, index) => (
        <Tab
          key={tab.id}
          id={tab.id}
          tabIndex={index}
          icon={tab.icon}
          text={tab.text}
        />
      ))}
    </div>
  )
}
