export interface CoverLetter {
  companyName: string;
  jobTitle: string;
  content: string;
  generatedAt: string;
}

export interface ApplicationSummary {
  matchScore: number;
  strengths: string[];
  missingSkills: string[];
  recommendations: string[];
}

export interface InterviewPreparation {
  likelyQuestions: string[];
  keyTopics: string[];
  suggestedPreparation: string[];
}