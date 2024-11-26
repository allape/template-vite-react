#!/usr/bin/env npx tsx

import Package from "../package.json";

console.log(
  "npm update",
  Object.keys(Package.dependencies).join(" "),
  Object.keys(Package.devDependencies).join(" "),
);
