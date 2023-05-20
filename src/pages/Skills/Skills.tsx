import {
  SKILLS_CAT_0,
  SKILLS_CAT_1,
  SKILLS_CAT_2,
  SKILLS_CAT_3,
} from "../../constants"

export default function Skills() {
  const fullSkillsList = [
    SKILLS_CAT_0,
    SKILLS_CAT_1,
    SKILLS_CAT_2,
    SKILLS_CAT_3,
  ]
  return (
    <div className="mb-6">
      <h1
        className="mb-6 md:mb-12 overflow-hidden text-ellipsis"
        title="Compétences"
      >
        <span className="highlight md:px-1.5">Compétences</span>
      </h1>
      <div className="flex flex-col gap-y-14">
        {fullSkillsList.map((skillList, index) => (
          <div key={index} className="flex flex-col gap-y-12 md:gap-y-4">
            {skillList.map(({ name, skills }) => (
              <div key={name}>
                <h2 className="font-bold mb-1">{name}</h2>

                <div className="flex flex-wrap gap-y-2 gap-x-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-indigo-800 rounded-full px-3 py-1 whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {index < fullSkillsList.length - 1 && (
              <div className="md:hidden border-b-2 border-rose-400 mx-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
