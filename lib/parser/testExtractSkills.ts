import { extractSkills } from "./extractSkills";

const cvText = `
Full Stack Developer

Skills:
JavaScript
TypeScript
React
GitHub
SQL
`;

console.log(
  extractSkills(cvText)
);