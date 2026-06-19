export interface JobSkillRequirement {
  skill: string;
  required: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  description: string;
  requirements: JobSkillRequirement[];
  source: string;
  postedDate: string;
}