"use client";

import { useState } from "react";
import { mockCandidate } from "../data/mockCandidate";
import { mockJobs } from "../data/mockJobs";
import { mockMatches } from "../data/mockMatches";

import CandidateProfile from "../components/CandidateProfile";
import JobCard from "../components/JobCard";
import MatchCard from "../components/MatchCard";
import CVUploader from "../components/CVUploader";
import SkillEditor from "../components/SkillEditor";
import SoftSkillEditor from "../components/SoftSkillEditor";
import CertificationEditor from "../components/CertificationEditor";
import JobTitleEditor from "../components/JobTitleEditor";

export default function Home() {
  const [candidate, setCandidate] =
  useState(mockCandidate);
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          🚀 JobPilot AI
        </h1>

        <p className="text-lg mb-8">
          AI-powered job matching and application assistant.
        </p>

        <section className="mb-10">
  <CVUploader />
</section>

<section className="mt-10">
  <h2 className="text-2xl font-semibold mb-4">
    Candidate Settings
  </h2>

  <SkillEditor />

  <SoftSkillEditor />

  <CertificationEditor />
  <JobTitleEditor />
</section>

<CandidateProfile candidate={candidate} />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Available Jobs
          </h2>

          {mockJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">
            Match Results
          </h2>

          {mockMatches.map((match) => (
            <MatchCard
              key={match.job.id}
              match={match}
            />
          ))}
        </section>
      </div>
    </main>
  );
}