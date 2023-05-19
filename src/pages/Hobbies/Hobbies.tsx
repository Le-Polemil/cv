import HobbyCard from "../../components/HobbyCard"
import { HOBBIES_LIST } from "../../constants"

export default function Hobbies() {
  return (
    <div>
      <h1 className="mb-6 md:mb-12">
        <span className="highlight md:px-1.5">Loisirs</span>
      </h1>

      <div
        className="grid gap-8 md:gap-24"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(calc(6em + 11vw), 1fr))",
        }}
      >
        {HOBBIES_LIST.map((hobby, index) => (
          <HobbyCard key={hobby.name} hobby={hobby} tabIndex={10 + index} />
        ))}
      </div>
    </div>
  )
}
