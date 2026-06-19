import { MatchResult } from "../types/match";

interface MatchCardProps {
  match: MatchResult;
}

export default function MatchCard({
  match,
}: MatchCardProps) {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h3 className="text-xl font-bold">
        {match.job.title}
      </h3>

      <p className="mb-2">
        {match.job.company}
      </p>

      <div className="mb-3">
        <span className="font-semibold">
          Match Score:
        </span>{" "}
        {match.score}%
      </div>

      <div className="mb-2">
        <h4 className="font-semibold">
          Matched Skills
        </h4>

        <ul>
          {match.matchedSkills.map((skill) => (
            <li key={skill}>
              ✅ {skill}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">
          Missing Skills
        </h4>

        <ul>
          {match.missingSkills.map((skill) => (
            <li key={skill}>
              ❌ {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}