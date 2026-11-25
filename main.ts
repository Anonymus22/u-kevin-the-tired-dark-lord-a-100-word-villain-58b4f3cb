import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: a 100-word villain monologue.
// Spoken by a dark lord who is secretly just very tired -- the tiredness
// lives in the rhythm, the trailing thoughts and the small deflections,
// never in a plain statement. He still has a scheme (the eclipse ritual,
// the vault beneath the throne, the stolen crown) and a history (nine
// kingdoms conquered, a general's betrayal at dawn).
const MONOLOGUE =
  "You know what nobody tells you about ruling an empire of ash? The paperwork. " +
  "I conquered the nine kingdoms before lunch and ever since it has been petitions. " +
  "Petitions about grain. Petitions about ghosts. " +
  "General Varric betrayed me at dawn, which was inconsiderate, because dawn is when I finally... " +
  "No. Focus. " +
  "Tonight the eclipse opens the vault beneath the throne, and the crown my father stole from the sea-kings will be mine again. " +
  "Then, at last, quiet. No more banners. No more kneeling. " +
  "Just me, the crown, and a long... sit down. Yes. Sit. " +
  "We can do the menacing later.";

const words = MONOLOGUE.trim().split(/\s+/);
if (words.length !== 100) {
  throw new Error(`Monologue must be exactly 100 words, got ${words.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE + "\n", "utf8");
