export interface ExperienceEntry {
  id: string;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  fieldOfStudy?: string;
  endDate?: string;
}

export interface CvSourceMeta {
  fileName: string;
  fileType: 'pdf' | 'docx';
  parsedAt: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  jobTitles: string[];
  technicalSkills: string[];
  softSkills: string[];
  certifications: string[];
  education: EducationEntry[];
  experience: ExperienceEntry[];
  source?: CvSourceMeta;
}