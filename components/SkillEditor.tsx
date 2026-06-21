"use client";

import { useState } from "react";

interface SkillEditorProps {
  skills: string[];
  setSkills: (skills: string[]) => void;
}

export default function SkillEditor({
  skills,
  setSkills,
}: SkillEditorProps) {
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

  const removeSkill = (
    skillToRemove: string
  ) => {
    setSkills(
      skills.filter(
        (skill) =>
          skill !== skillToRemove
      )
    );
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">
        Candidate Skills
      </h2>

      <ul className="mb-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center justify-between mb-2"
          >
            <span>
              ✅ {skill}
            </span>

            <button
              onClick={() =>
                removeSkill(skill)
              }
              className="bg-red-600 text-white px-2 py-1 rounded text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          value={newSkill}
          onChange={(e) =>
            setNewSkill(e.target.value)
          }
          placeholder="Add skill..."
          className="border p-2 rounded text-black flex-1"
        />

        <button
          onClick={addSkill}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
}