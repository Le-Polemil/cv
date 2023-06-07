import "./App.css"
import Tabs from "./components/Tabs"
import {
  JOBS,
  HOBBIES,
  PROFILE,
  STACK,
  PROJECTS,
  EDUCTATIONS,
} from "./constants"
import useTabContext from "./contexts/TabContext"

import Jobs from "./pages/Jobs"
import Hobbies from "./pages/Hobbies"
import Profile from "./pages/Profile"
import Stack from "./pages/Skills"
import Projects from "./pages/Projects"
import Educations from "./pages/Educations"

import GreatBritainFlag from "./components/icons/GreatBritainFlag"
import FranceFlag from "./components/icons/FranceFlag"
import RussiaFlag from "./components/icons/RussiaFlag"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import dayjs from "dayjs"

const TAB_CONTENT = {
  [PROFILE]: <Profile />,
  [JOBS]: <Jobs />,
  [STACK]: <Stack />,
  [HOBBIES]: <Hobbies />,
  [PROJECTS]: <Projects />,
  [EDUCTATIONS]: <Educations />,
}

const FLAGS = {
  fr: FranceFlag,
  en: GreatBritainFlag,
  ru: RussiaFlag,
}
const LANGS_AVAILABLE: Array<keyof typeof FLAGS> = ["fr", "en", "ru"]

function App() {
  const [tab] = useTabContext()
  const [, i18next] = useTranslation()
  const [currentLang, setCurrentLang] = useState<keyof typeof FLAGS>(
    i18next.language as keyof typeof FLAGS
  )

  useEffect(() => {
    if (currentLang) {
      i18next.changeLanguage(currentLang)
      dayjs.locale(currentLang)
    }
  }, [currentLang, i18next])

  const Flag = FLAGS[currentLang]

  return (
    <div className="flex flex-col md:flex-row h-full justify-center">
      <div className="absolute top-0 right-0 rounded-xl md:p-2 z-10">
        <button
          className="p-1"
          onClick={() =>
            setCurrentLang(
              LANGS_AVAILABLE[
                (LANGS_AVAILABLE.findIndex((l) => l === currentLang) + 1) % 3
              ]
            )
          }
        >
          <Flag size={42} className="rounded-xl" />
        </button>
      </div>

      <div className="h-6 md:w-10 xl:w-20 md:h-auto bg-indigo-950 mx-2 xs:mx-5 md:mx-0 md:my-10 box-border shadow-around"></div>

      <Tabs />

      <div className="content flex-1 bg-indigo-950 mx-2 xs:mx-5 md:mx-0 md:my-10 p-6 sm:p-12 lg:p-16 shadow-around overflow-y-auto scrollbar-hide max-w-screen-2xl">
        {TAB_CONTENT?.[tab as keyof typeof TAB_CONTENT]}
      </div>
    </div>
  )
}

export default App
