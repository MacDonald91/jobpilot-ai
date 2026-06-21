"use client";

import { useState } from "react";

export default function JobTitleEditor() {
  const [jobTitles, setJobTitles] =
    useState([
      "Junior Software Developer",
      "Full Stack Developer",
    ]);

  const [newJobTitle,
    setNewJobTitle] =
    useState("");

  const addJobTitle = () => {
    if (!newJobTitle.trim())
      return;

    setJobTitles([
      ...jobTitles,
      newJobTitle.trim(),
    ]);

    setNewJobTitle("");
  };

  const removeJobTitle = (
    titleToRemove: string
  ) => {
    setJobTitles(
      jobTitles.filter(
        (title) =>
          title !== titleToRemove
      )
    );
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">
        Target Roles
      </h2>

      <ul className="mb-4">
        {jobTitles.map((title) => (
          <li
            key={title}
            className="flex items-center justify-between mb-2"
          >
            <span>
              🎯 {title}
            </span>

            <button
              onClick={() =>
                removeJobTitle(title)
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
          value={newJobTitle}
          onChange={(e) =>
            setNewJobTitle(
              e.target.value
            )
          }
          placeholder="Add target role..."
          className="border p-2 rounded text-black flex-1"
        />

        <button
          onClick={addJobTitle}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}