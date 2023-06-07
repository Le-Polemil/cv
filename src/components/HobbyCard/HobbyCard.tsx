import { useTranslation } from "react-i18next"
import { HobbiesDataType } from "../../queries/hobbies"

interface HobbyProps {
  hobby: HobbiesDataType["hobbies"]["data"][0]
  tabIndex: number
}

export default function HobbyCard({ hobby, tabIndex }: HobbyProps) {
  const [t] = useTranslation()

  if (!hobby) return null

  const { attributes } = hobby ?? {}

  return (
    <div
      role="presentation"
      className="bg-purple-50 rounded-sm aspect-square relative overflow-hidden shadow-around hover:scale-105 transition-transform"
      tabIndex={tabIndex}
    >
      <img
        className="absolute left-0 right-0 w-full h-full"
        src={
          "https://bo.bhuumi.land" + attributes?.media?.data?.attributes?.url
        }
        alt={attributes?.media?.data?.attributes?.name}
      />
      <div
        className={[
          "absolute left-0 right-0 bottom-0 bg-opacity-30 bg-indigo-950 px-4 py-6 flex flex-col shadow-inner",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="flex-1" />

        <h2 className="flex items-center font-bold">
          {t(attributes.name)}{" "}
          <span className="material-icons p-2" style={{ fontSize: 28 }}>
            {attributes.icon}
          </span>
        </h2>

        <p className="mt-2">{t(attributes.description)}</p>
      </div>
    </div>
  )
}
