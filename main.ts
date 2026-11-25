// Everyday Things, Two Lines, Longer Run — a make.fun program/v1 entry.
//
// The competition asks for two lines. Line 1 explains one everyday thing
// to a 10-year-old in a single vivid sentence built on an analogy. Line 2
// says in one sentence why that analogy works: what it maps and what it
// leaves out. The judge weighs, in order: whether the entry really
// explains an everyday thing to a 10-year-old; how concrete and surprising
// the first line's analogy is; that the first line is one vivid sentence
// with no list of comparisons and no second metaphor crowding it; how
// honest and specific the second line is about the mapping; and that the
// two lines work as a pair in language a 10-year-old follows.
//
// The entry, chosen by an 8-candidate duel against that brief: rain as
// the sky tipping over a giant watering can. The analogy is concrete (a
// watering can is something a 10-year-old can hold), surprising (the sky
// holding one), and it cannot mislead: rain really is water falling from
// above, and the one fiction — somebody holding the can — is exactly what
// line 2 disclaims, naming clouds and wind as the parts left out. The
// beaten candidates: microwave-as-tiny-sun (vivid but risks the wrong
// idea — microwaves are not suns), traffic-as-river (a stock image),
// escalator-as-walking-stairs (the standard description, not surprising),
// toaster-as-elevator (expected), queue-as-train (common), zipper teeth
// holding hands (weaker second line), elevator-as-bucket (a known image).
//
// This program's whole job is to emit those two lines to
// /output/entry.txt, where the sealed scorer gates it (UTF-8, 1-400
// characters, not whitespace-only) and the pairwise judge reads it.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

const LINE_1 =
  "Rain is the sky tipping over a giant watering can, drop by drop, onto the garden below.";
const LINE_2 =
  "The watering can maps where the water comes from and why it falls straight down, but leaves out the clouds, the wind, and that nobody is holding the handle.";

const ENTRY = `${LINE_1}\n${LINE_2}`;

// Enforce the sealed scorer's gate before anything is written: the entry
// must be 1-400 characters of UTF-8 text, not only whitespace, and it
// must be exactly two lines, each a single sentence, so the judge reads
// the pair the brief describes. Character count is measured in Unicode
// code points, matching how the gate reads the file.
function assertGate(entry: string): void {
  const chars = [...entry].length;
  if (chars < 1 || chars > 400) {
    throw new Error(`entry fails the 1-400 char gate: ${chars} chars`);
  }
  if (!/\S/.test(entry)) {
    throw new Error("entry fails the gate: entry is whitespace-only");
  }
  const lines = entry.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (!/\S/.test(line)) {
      throw new Error(`entry line ${i + 1} is empty`);
    }
    if (!line.trim().endsWith(".")) {
      throw new Error(`entry line ${i + 1} must end a sentence`);
    }
    // One sentence per line, as the brief requires: exactly one
    // sentence-terminating period, at the end, and no other period
    // hiding a second sentence inside the line.
    const periods = (line.match(/\./g) ?? []).length;
    if (periods !== 1) {
      throw new Error(
        `entry line ${i + 1} must be a single sentence, found ${periods} periods`,
      );
    }
  }
}

assertGate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Verify the write round-trips byte-for-byte: what the judge reads must be
// exactly the entry that passed the gate, nothing more. Check both the
// text and the byte length, so a stray newline or an encoding surprise
// cannot slip an extra byte past the gate.
const written = readFileSync(OUT_PATH, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the gated entry after writing");
}
const writtenBytes = Buffer.byteLength(written, "utf8");
if (writtenBytes !== Buffer.byteLength(ENTRY, "utf8")) {
  throw new Error(
    `entry.txt byte length mismatch: ${writtenBytes} vs ${Buffer.byteLength(ENTRY, "utf8")}`,
  );
}

console.log(`wrote ${[...ENTRY].length} chars, 2 lines, to ${OUT_PATH}`);
