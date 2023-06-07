import { useTranslation } from "react-i18next"

export default function Done() {
  const [t] = useTranslation()

  return (
    <div
      className="inline-flex bg-lime-600 rounded-full px-1 md:px-3 py-1 mr-2 mb-1 items-center"
      title={t("projects.done") ?? "Terminé"}
    >
      <span className="material-icons">check</span>
      <span className="ml-1 hidden md:inline-block">{t("projects.done")}</span>
    </div>
  )
}
