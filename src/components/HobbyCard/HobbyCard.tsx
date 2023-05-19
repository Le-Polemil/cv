import { HobbyType } from "../../constants"

interface HobbyProps {
  hobby: HobbyType
  tabIndex: number
}

export default function HobbyCard({ hobby, tabIndex }: HobbyProps) {
  return (
    <div
      role="presentation"
      className="bg-purple-50 rounded-sm aspect-square relative overflow-hidden shadow-around hover:scale-105 transition-transform"
      tabIndex={tabIndex}
    >
      <img
        className="absolute left-0 right-0 w-full h-full"
        src={hobby.bgImg}
        alt={hobby.name}
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
          {hobby.name}{" "}
          <span className="material-icons p-2" style={{ fontSize: 28 }}>
            {hobby.icon}
          </span>
        </h2>

        <p className="mt-2">{hobby.description}</p>
      </div>
    </div>
  )
}
