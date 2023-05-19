import { ReactNode, createContext, useContext, useState } from "react"
import { PROFILE } from "../constants"

type TabContextType = [string, (v: string) => void]

const TabContext = createContext<TabContextType>([PROFILE, () => null])

export function TabContextProvider({ children }: { children: ReactNode }) {
    const [tab, setTab] = useState<string>(PROFILE)

    return (
        <TabContext.Provider value={[tab, setTab]}>
            {children}
        </TabContext.Provider>
    )
}

const useTabContext = () => useContext(TabContext)
export default useTabContext
