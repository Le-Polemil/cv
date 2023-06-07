import { useTranslation } from "react-i18next"

export default function Ongoing() {
  const [t] = useTranslation()

  return (
    <div
      className="inline-flex md:hidden bg-indigo-800 rounded-full px-1 md:px-3 py-1 mr-2 mb-1 items-center"
      title={t("projects.ongoing") ?? "En cours"}
    >
      <span className="material-icons">play_arrow</span>
    </div>
  )
}
