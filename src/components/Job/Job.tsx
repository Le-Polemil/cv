import { JobType } from "../../constants"

export default function Job(job: JobType) {
  return (
    <div>
      <div className="flex flex-wrap font-bold gap-x-10 md:gap-x-20">
        <h2>{job.title}</h2>

        <div className="text-amber-400 font-bold">
          {job.company} ({job.companyDetails})
        </div>
      </div>

      <div className="text-rose-400 mb-6">
        {job.dateStart} - {job.dateEnd}
      </div>

      <ul className="list-disc pl-4">
        {job.missions.map((mission) => (
          <li key={mission}>{mission}</li>
        ))}
      </ul>
    </div>
  )
}
