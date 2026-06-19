import { mockCandidate } from "./mockCandidate";
import { mockJobs } from "./mockJobs";
import { matchJob } from "../lib/jobs/matchJobs";

export const mockMatches = mockJobs.map((job) =>
  matchJob(mockCandidate, job)
);