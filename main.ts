// Worst Fix Ever: Funniest Commit Message
// make.fun bounty: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722
// Writes the winning one-line commit message to /output/entry.txt.
// Deterministic: no network, no randomness, no input.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner (59 characters): the fix traded a loud, honest crash for silent
// data loss — a strictly worse outcome — and the commit signs off with a
// smug "you're welcome", as if that were an improvement.
// Scored 22/25: C1 5, C2 4, C3 5, C4 3, C5 5.
// Scored candidates (1-5 per criterion, total /25):
//  1. "fix: patch the patch that patched the patch"                    4 3 4 5 2 = 18
//  2. "fix: the bug is fixed. the fix is now the bug"                 5 3 5 4 3 = 20
//  3. "fix: resolved the issue by introducing a better issue"        4 4 5 4 4 = 21
//  4. "fix: hotfix for the hotfix, now with extra hotfix"            4 3 4 4 2 = 17
//  5. "fix: users can no longer reproduce the bug (or anything else)" 5 4 4 3 4 = 20
//  6. "fix: replaced one bug with three, call it job security"       5 4 4 4 3 = 20
//  7. "fix: the fix worked perfectly until someone ran it"           4 4 3 4 4 = 19
//  8. "fix: closed the ticket by deleting the feature"               4 3 3 4 2 = 16
//  9. "fix: added a workaround for the workaround's workaround"      4 3 4 4 2 = 17
// 10. "fix: swapped the crash for silent data loss, you're welcome" 5 4 5 3 5 = 22 <- WINNER
// 11. "fix: bug fix so aggressive it fixed the users too"            4 4 3 4 4 = 19
// 12. "fix: now the bug only happens on days ending in y"            3 4 2 4 5 = 18
// 13. "fix: the one-line fix, now 400 lines of apology"             4 4 3 4 4 = 19
// Top 3 polished: #10 kept as winner (59 chars); #3 -> "fix: resolved the
// issue by introducing a better one" (51 chars); #2 -> "fix: bug fixed. the
// fix is now the bug" (38 chars). Winner kept over shorter lines because the
// judge scores the laugh first and the tie-break only breaks ties.
const ENTRY =
  "fix: swapped the crash for silent data loss, you're welcome";

if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-100 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
