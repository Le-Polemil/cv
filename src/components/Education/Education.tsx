import { EducationType } from "../../types"

export default function Education({
  grade,
  name,
  dateStart,
  dateEnd,
  school,
  schoolDetails,
}: EducationType) {
  return (
    <div>
      <div className="flex flex-wrap font-bold gap-x-10 md:gap-x-20">
        <h2>
          {grade} : {name}
        </h2>

        <div className="text-amber-400 font-bold">
          {school} ({schoolDetails})
        </div>
      </div>

      <div className="text-rose-400 mb-6">
        {dateStart} - {dateEnd}
      </div>
    </div>
  )
}
