import { useTranslation } from "react-i18next"
import { ProjectsDataType } from "../../queries/projects"
import Done from "../Done"
import Ongoing from "../Ongoing"
import Paused from "../Paused"

export default function Project({
  attributes,
}: ProjectsDataType["projects"]["data"][0]) {
  const [t] = useTranslation()
  if (!attributes) return null

  const {
    name,
    details,
    dateInfos,
    // isDev,
    isPaused,
    isDone,
    link,
  } = attributes ?? {}

  return (
    <div>
      <div>
        {isDone && <Done />}
        {isPaused && <Paused />}
        {!isDone && !isPaused && <Ongoing />}

        <a href={link ?? undefined} target="_blank">
          <h2 className="inline font-bold text-white">
            {t(name ?? "")}
            {link && (
              <span className="material-icons ml-2 align-sub">launch</span>
            )}
          </h2>
        </a>
      </div>

      <div className="flex flex-wrap mb-2">
        <div className="text-rose-400">{t(dateInfos ?? "")}</div>
      </div>

      <div>{t(details ?? "")}</div>
    </div>
  )
}
