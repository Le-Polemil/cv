import { ProjectType } from "../../types"

export default function Project({
  name,
  details,
  dateStart,
  dateEnd,
  // isDev,
  isPaused,
  isDone,
  link,
}: ProjectType) {
  return (
    <div>
      <div>
        {isDone && (
          <div
            className="inline-flex bg-lime-600 rounded-full px-1 md:px-3 py-1 mr-2 mb-1 items-center"
            title="Terminé"
          >
            <span className="material-icons">check</span>
            <span className="ml-1 hidden md:inline-block">Terminé</span>
          </div>
        )}
        {isPaused && (
          <div
            className="inline-flex bg-rose-400 rounded-full px-1 md:px-3 py-1 mr-2 mb-1 items-center"
            title="En pause"
          >
            <span className="material-icons">pause</span>
            <span className="ml-1 hidden md:inline-block">En pause</span>
          </div>
        )}

        {!isDone && !isPaused && (
          <div
            className="inline-flex md:hidden bg-indigo-800 rounded-full px-1 md:px-3 py-1 mr-2 mb-1 items-center"
            title="En cours"
          >
            <span className="material-icons">play_arrow</span>
          </div>
        )}

        <a href={link ?? undefined} target="_blank">
          <h2 className="inline font-bold text-white">
            {name}
            {link && (
              <span className="material-icons ml-2 align-sub">launch</span>
            )}
          </h2>
        </a>
      </div>

      <div className="flex flex-wrap mb-2">
        <div className="text-rose-400">
          {dateStart ?? "Pas encore commencé"}
          {dateStart && (dateEnd ?? "Aujourd'hui") && (
            <span className="mx-1">-</span>
          )}
          {dateStart ? dateEnd ?? "Aujourd'hui" : ""}
        </div>
      </div>

      <div>{details}</div>
    </div>
  )
}
