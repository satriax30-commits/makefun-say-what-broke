// Say What Actually Broke — entry program.
//
// Writes exactly one line of error copy to /output/entry.txt
// (falls back to ./output/entry.txt when /output does not exist).
// Node 22, stdlib only: no network, no randomness, no clock.
// Deterministic: the same bytes come out on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { existsSync } from "node:fs";
import { join } from "node:path";

// The entry line. One specific failure (an upload that died at 99%),
// the brutal truth in plain words, a repeatable image, and the next
// step — all in a single line a real product could ship in a dialog.
const ENTRY =
  "Your upload died at 99% — the server tripped one step from the finish line. Your file is still safe on your device; try again.";

// Gate: the scorer requires UTF-8 text of 1–200 characters, a single
// line, and more than whitespace.
function validate(line: string): void {
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(ENTRY);

// Resolve the output directory: /output when it exists (the grader's
// sandbox), otherwise ./output next to the working directory.
function outputDir(): string {
  if (existsSync("/output")) {
    return "/output";
  }
  return join(process.cwd(), "output");
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
// No trailing newline: the gate counts characters, and one clean line
// is exactly what the judge reads.
writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
