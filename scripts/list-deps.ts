#!/usr/bin/env npx tsx

import Package from "../package.json";

export interface IPackage {
  dependencies: object;
  peerDependencies: object;
  devDependencies: object;
}

const p = Package as unknown as IPackage;

console.log(
  "npm update",
  Object.keys(p.dependencies).join(" "),
  Object.keys(p.peerDependencies).join(" "),
  Object.keys(p.devDependencies).join(" "),
);
