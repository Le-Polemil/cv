import useTabContext from "../../contexts/TabContext"

export interface TabType {
  id: string
  text: string
  icon: string
  tabIndex?: number
}

export default function Tab({ id, tabIndex, icon, text }: TabType) {
  const [tab, setTab] = useTabContext()

  return (
    <button
      role="button"
      className={[
        "flex-1 flex items-center justify-center hover:bg-opacity-10 hover:bg-indigo-950 cursor-pointer transition-all py-4 md:py-0 md:px-4",
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
      <span className="hidden xl:inline-block">{text}</span>
    </button>
  )
}
