import { CandidateProfile as Candidate } from "../types/candidate";

interface CandidateProfileProps {
  candidate: Candidate;
}

export default function CandidateProfile({
  candidate,
}: CandidateProfileProps) {
  return (
    <div className="border rounded-lg p-6 mb-8 shadow-sm">
      <h2 className="text-2xl font-bold mb-2">
        {candidate.name}
      </h2>

      <p className="font-medium mb-6">
        {candidate.jobTitles.join(" • ")}
      </p>

      <h3 className="font-semibold mb-3">
        Technical Skills
      </h3>

      <div className="flex flex-wrap gap-3 mb-6">
        {candidate.technicalSkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="font-semibold mb-3">
        Soft Skills
      </h3>

      <div className="flex flex-wrap gap-3 mb-6">
        {candidate.softSkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="font-semibold mb-3">
        Certifications
      </h3>

      <div className="flex flex-wrap gap-3">
        {candidate.certifications.map(
          (certification) => (
            <span
              key={certification}
              className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium"
            >
              🎓 {certification}
            </span>
          )
        )}
      </div>
    </div>
  );
}