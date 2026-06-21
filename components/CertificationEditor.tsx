"use client";

import { useState } from "react";

interface CertificationEditorProps {
  certifications: string[];
  setCertifications: (
    certifications: string[]
  ) => void;
}

export default function CertificationEditor({
  certifications,
  setCertifications,
}: CertificationEditorProps) {
  const [newCertification,
    setNewCertification] =
    useState("");

  const addCertification = () => {
    if (!newCertification.trim())
      return;

    setCertifications([
      ...certifications,
      newCertification.trim(),
    ]);

    setNewCertification("");
  };

  const removeCertification = (
    certificationToRemove: string
  ) => {
    setCertifications(
      certifications.filter(
        (certification) =>
          certification !==
          certificationToRemove
      )
    );
  };

  return (
    <div className="border rounded-lg p-4 mb-6">
      <h2 className="text-xl font-bold mb-4">
        Certifications
      </h2>

      <ul className="mb-4">
        {certifications.map(
          (certification) => (
            <li
              key={certification}
              className="flex items-center justify-between mb-2"
            >
              <span>
                🎓 {certification}
              </span>

              <button
                onClick={() =>
                  removeCertification(
                    certification
                  )
                }
                className="bg-red-600 text-white px-2 py-1 rounded text-sm"
              >
                Remove
              </button>
            </li>
          )
        )}
      </ul>

      <div className="flex gap-2">
        <input
          type="text"
          value={newCertification}
          onChange={(e) =>
            setNewCertification(
              e.target.value
            )
          }
          placeholder="Add certification..."
          className="border p-2 rounded text-black flex-1"
        />

        <button
          onClick={addCertification}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}