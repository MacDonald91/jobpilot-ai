"use client";

import { useState } from "react";

export default function SkillEditor() {
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "GitHub",
  ]);

  const [newSkill, setNewSkill] =
    useState("");

  const addSkill = () => {
    if (!newSkill.trim()) return;

    setSkills([
      ...skills,
      newSkill.trim(),
    ]);

    setNewSkill("");
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">
        Candidate Skills
      </h2>

      <ul className="mb-4">
        {skills.map((skill) => (
          <li key={skill}>
            ✅ {skill}
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newSkill}
        onChange={(e) =>
          setNewSkill(e.target.value)
        }
        placeholder="Add skill..."
        className="border p-2 rounded mr-2 text-black"
      />

      <button
        onClick={addSkill}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Skill
      </button>
    </div>
  );
}