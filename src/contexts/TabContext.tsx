import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { PROFILE } from "../constants"

type TabContextType = [string, (v: string) => void]

const TabContext = createContext<TabContextType>([PROFILE, () => null])

export function TabContextProvider({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<string>(PROFILE)

  useEffect(() => {
    const content = document?.querySelector?.("#root .content")
    if (content) content.scrollTop = 0
  }, [tab])

  return (
    <TabContext.Provider value={[tab, setTab]}>{children}</TabContext.Provider>
  )
}

const useTabContext = () => useContext(TabContext)
export default useTabContext
