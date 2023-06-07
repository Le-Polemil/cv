import { useTranslation } from "react-i18next"
import HobbyCard from "../../components/HobbyCard"
import { GET_HOBBIES, HobbiesDataType } from "../../queries/hobbies"
import { useQuery } from "@apollo/client"

export default function Hobbies() {
  const [t] = useTranslation()
  const { data } = useQuery<HobbiesDataType>(GET_HOBBIES)

  const hobbies = data?.hobbies?.data ?? []

  return (
    <div>
      <h1 className="mb-6 md:mb-12">
        <span className="highlight md:px-1.5">{t("tab.jobs")}</span>
      </h1>

      <div
        className="grid gap-8 md:gap-24"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(calc(6em + 11vw), 1fr))",
        }}
      >
        {hobbies?.length > 0 &&
          hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.id} hobby={hobby} tabIndex={10 + index} />
          ))}
      </div>
    </div>
  )
}
