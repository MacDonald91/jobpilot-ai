import { Job } from "../types/job";

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Founder's AI Developer",
    company: "Launchpad Build AI",
    location: "Edinburgh",
    salary: "£40,000 - £55,000",
    description:
      "Build AI-powered applications and rapid prototypes using modern technologies.",
    requirements: [
      { skill: "TypeScript", required: true },
      { skill: "React", required: true },
      { skill: "GitHub", required: true },
      { skill: "AI Tools", required: true },
      { skill: "Problem Solving", required: true },
    ],
    source: "LinkedIn",
    postedDate: "2026-06-18",
  },

  {
    id: "2",
    title: "Junior Full Stack Developer",
    company: "Spencer West",
    location: "Remote",
    salary: "Competitive",
    description:
      "Support and enhance web applications using TypeScript and React.",
    requirements: [
      { skill: "TypeScript", required: true },
      { skill: "React", required: true },
      { skill: "SQL", required: true },
      { skill: "Git", required: true },
      { skill: "APIs", required: true },
    ],
    source: "Company Website",
    postedDate: "2026-06-18",
  },
];