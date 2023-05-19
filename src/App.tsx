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

const TAB_CONTENT = {
  [PROFILE]: <Profile />,
  [JOBS]: <Jobs />,
  [STACK]: <Stack />,
  [HOBBIES]: <Hobbies />,
  [PROJECTS]: <Projects />,
  [EDUCTATIONS]: <Educations />,
}

function App() {
  const [tab] = useTabContext()

  return (
    <div className="flex flex-col md:flex-row h-full justify-center">
      <div className="h-10 md:w-10 lg:w-20 md:h-auto bg-indigo-950 mx-2 xs:mx-5 md:mx-0 md:my-10 box-border shadow-around"></div>

      <Tabs />

      <div className="content flex-1 bg-indigo-950 mx-2 xs:mx-5 md:mx-0 md:my-10 p-6 sm:p-12 lg:p-16 shadow-around overflow-y-auto scrollbar-hide max-w-screen-2xl">
        {TAB_CONTENT?.[tab as keyof typeof TAB_CONTENT]}
      </div>
    </div>
  )
}

export default App
