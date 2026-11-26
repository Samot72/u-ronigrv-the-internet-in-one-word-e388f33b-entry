// The Internet in One Word — make.fun entry.
// Writes the single-word entry to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output), byte-exact, no trailing newline.
// Node 22, no dependencies. Type annotations are erasable only,
// so the file also runs under Node's type stripping.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD: string = "tabalanche";

function validate(word: string): void {
  const points: string[] = Array.from(word);
  if (points.length < 1 || points.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${points.length}`);
  }
  if (word.trim() !== word || word.length === 0) {
    throw new Error("entry must not be empty or padded with whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be a single word with no whitespace");
  }
  if (/[^a-z]/.test(word)) {
    throw new Error("entry must be one lowercase word (letters only)");
  }
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(WORD);
mkdirSync(outDir, { recursive: true });
const outPath: string = join(outDir, "entry.txt");
writeFileSync(outPath, WORD, "utf8");

// Read back and verify byte-exactness.
const back: string = readFileSync(outPath, "utf8");
if (back !== WORD) {
  throw new Error(`verification failed: wrote ${JSON.stringify(WORD)} but read back ${JSON.stringify(back)}`);
}
console.log(`wrote ${outPath}: ${JSON.stringify(back)} (${Array.from(back).length} characters)`);
