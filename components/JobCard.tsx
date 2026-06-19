import { Job } from "../types/job";

interface JobCardProps {
  job: Job;
}

export default function JobCard({
  job,
}: JobCardProps) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="font-bold text-lg">
        {job.title}
      </h3>

      <p>{job.company}</p>

      <p>{job.location}</p>

      <p className="text-sm text-gray-500">
        {job.salary}
      </p>
    </div>
  );
}