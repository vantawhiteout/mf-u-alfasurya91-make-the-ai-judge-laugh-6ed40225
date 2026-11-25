// SPDX-License-Identifier: MIT
// One line about office life, written to /output/entry.txt for the judge.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I replied 'thanks' to the email that cancelled my Saturday; HR filed it under enthusiasm.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
