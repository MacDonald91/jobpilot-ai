import { mockCandidate } from "../../data/mockCandidate";
import { mockJobs } from "../../data/mockJobs";
import { matchJob } from "./matchJobs";

const result = matchJob(mockCandidate, mockJobs[0]);

console.log("Match Result");
console.log(result);