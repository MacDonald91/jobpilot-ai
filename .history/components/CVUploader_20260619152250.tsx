"use client";

import { useState } from "react";
// import { extractPdfText } from "../lib/parser/extractPdfText";

export default function CVUploader() {
  const [file, setFile] =
    useState<File | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile =
      event.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);

      try {
        const text =
          await extractPdfText(selectedFile);

        console.log("PDF TEXT:");
        console.log(text);
      } catch (error) {
        console.error(
          "PDF extraction failed:",
          error
        );
      }
    }
  };

  return (
    <div className="mb-8">
      <label
        htmlFor="cv-upload"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer inline-block hover:bg-blue-700"
      >
        Upload CV
      </label>

      <input
        id="cv-upload"
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      {file && (
        <p className="mt-3 text-sm">
          📄 Selected File: {file.name}
        </p>
      )}
    </div>
  );
}