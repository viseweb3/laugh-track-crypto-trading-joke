// Laugh Track: The Crypto Trading Joke Contest
// https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
//
// One line, 169 characters (171 bytes UTF-8), about crypto and trading life.
// The program writes the joke as plain text to /output/entry.txt,
// where the sealed gate scorer checks it (UTF-8, 1-200 chars) and
// the judge model compares it two at a time against the other entries.
//
// The joke, written for the judge brief's criteria in order:
//   1. One-line joke about crypto/trading life, clear setup + turn.
//   2. A real laugh: surprise turn, payoff that rewards the setup.
//   3. True to trading life: buying the dip, dollar-cost averaging.
//   4. Tight phrasing, no throat clearing, punchline at the end.
//   5. Holds up on a second read; a line a trader would repeat.

import { mkdirSync, writeFileSync } from "node:fs";

// Setup: the dip-buyer who cannot stop. Turn: the portfolio is a
// staircase to the basement. Payoff: every step down was re-labelled
// "dollar-cost averaging" — the self-delusion every trader knows.
const JOKE =
  "I bought the dip, then the dip dipped, so I bought that dip too — my portfolio is now a staircase to the basement, and every step down I called it dollar-cost averaging.";

const OUT_PATH = "/output/entry.txt";

function main(): void {
  const chars = [...JOKE].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (JOKE.trim() !== JOKE || JOKE.trim().length === 0) {
    throw new Error("entry must not be only whitespace or padded");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, JOKE, "utf8");
  console.log(`wrote ${chars} characters to ${OUT_PATH}`);
}

main();
