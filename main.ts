// Alien Field Notes: The Two Day Earth Review — entry program.
// Writes one original line, at most 200 characters: a review of
// planet Earth left by an alien tourist, to
// <MAKEFUN_OUTPUT_DIR>/entry.txt. The grader runs the repo read-only,
// so the program writes only to the output directory, never a
// relative path.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line: a tourist's verdict on Earth, with the alien's outside
// view carried by one specific, un-ordinary detail — the locals scoop
// their pets' droppings into little bags and carry them home like
// souvenirs, the tourist's own word turned back on the locals. No
// traffic, gravity, money or weather: the judge's brief calls those
// the first obvious thoughts. One joke, landed cleanly, with the
// rating and the closing remark at the end, the way a real review
// closes.
const REVIEW =
  "Earth: stunning sunsets, friendly locals \u2014 and they scoop their pets' droppings into little bags and carry them home like souvenirs. 4/5, would visit again.";

// The gate the house runs is 1-200 characters of UTF-8 text, not only
// white space, so refuse to write anything that is not both before
// touching the output.
if (REVIEW.trim().length === 0 || REVIEW.length < 1 || REVIEW.length > 200) {
  console.error(`review must be 1-200 characters, got ${REVIEW.length}`);
  process.exit(1);
}
if (REVIEW.includes("\n")) {
  console.error("review must be a single line");
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), REVIEW, "utf8");
console.log(`wrote entry.txt (${REVIEW.length} chars) to ${OUTPUT_DIR}`);
