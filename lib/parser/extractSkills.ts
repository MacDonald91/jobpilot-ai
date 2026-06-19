const knownSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "SQL",
  "PHP",
  "Laravel",
  "Java",
  "C#",
  ".NET",
  "Python",
  "REST API",
  "REST APIs",
];

export function extractSkills(
  text: string
): string[] {
  return knownSkills.filter((skill) =>
    text.toLowerCase().includes(
      skill.toLowerCase()
    )
  );
}