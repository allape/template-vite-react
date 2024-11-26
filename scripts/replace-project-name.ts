#!/usr/bin/env npx tsx

import * as fs from "fs";

const ProjectName: string = process.argv[2];

if (!ProjectName) {
  console.error("Usage: npx tsx scripts/replace-project-name.ts <project-name>");
  process.exit(1);
}

if (!/^([a-z0-9]-?)+$/.test(ProjectName)) {
  console.error("Invalid project name, must be a kebab-case string, for example project-name");
  process.exit(1);
}

const CamelCaseProjectName = ProjectName.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("");

function replaceInFile(filePath: string, from: string, to: string) {
  const content = fs.readFileSync(filePath, "utf-8");
  fs.writeFileSync(filePath, content.replaceAll(from, to));
}

replaceInFile("package.json", "__projectname__", ProjectName);
replaceInFile("package-lock.json", "__projectname__", ProjectName);

replaceInFile("README.md", "__ProjectName__", CamelCaseProjectName);
replaceInFile("index.html", "__ProjectName__", CamelCaseProjectName);
