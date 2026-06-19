import { CandidateProfile } from "../../types/candidate";
import { Job } from "../../types/job";
import { MatchResult } from "../../types/match";

export function matchJob(
  candidate: CandidateProfile,
  job: Job
): MatchResult {
  const candidateSkills = candidate.technicalSkills.map((skill) =>
    skill.toLowerCase()
  );

  const requiredSkills = job.requirements.map((requirement) =>
    requirement.skill.toLowerCase()
  );

  const matchedSkills = requiredSkills.filter((skill) =>
    candidateSkills.includes(skill)
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !candidateSkills.includes(skill)
  );

  const score = Math.round(
    (matchedSkills.length / requiredSkills.length) * 100
  );

  const strengths = matchedSkills.map(
    (skill) => `Demonstrated experience with ${skill}`
  );

  const recommendations = missingSkills.map(
    (skill) => `Consider developing experience with ${skill}`
  );

  return {
    job,
    score,
    matchedSkills,
    missingSkills,
    strengths,
    recommendations,
  };
}