import { useTranslation } from "react-i18next"

export default function Paused() {
  const [t] = useTranslation()

  return (
    <div
      className="inline-flex bg-rose-400 rounded-full px-1 md:px-3 py-1 mr-2 mb-1 items-center"
      title={t("projects.paused") ?? "En pause"}
    >
      <span className="material-icons">pause</span>
      <span className="ml-1 hidden md:inline-block">
        {t("projects.paused")}
      </span>
    </div>
  )
}
