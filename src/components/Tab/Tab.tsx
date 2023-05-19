import { TabType } from "../../constants"
import useTabContext from "../../contexts/TabContext"

export default function Tab({ id, tabIndex, icon, text }: TabType) {
  const [tab, setTab] = useTabContext()

  return (
    <button
      role="button"
      className={[
        "flex-1 flex items-center justify-center hover:bg-opacity-10 hover:bg-indigo-950 cursor-pointer transition-all",
        tab === id ? "text-rose-400" : "text-indigo-950",
      ]
        .filter(Boolean)
        .join(" ")}
      tabIndex={tabIndex}
      onClick={() => setTab(id)}
    >
      <span className="material-icons p-2" style={{ fontSize: 28 }}>
        {icon}
      </span>
      <span className="hidden lg:inline-block capitalize">{text}</span>
    </button>
  )
}
