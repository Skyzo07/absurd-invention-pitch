// One-Sentence Absurd Invention Pitch.
// The entry is a single sentence (173 chars, within the 1-220 gate) pitching
// a ridiculous invention — a jar lid that surrenders after a staring contest —
// that fixes the tiny everyday annoyance of a stuck pickle-jar lid.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The Jar Lid Negotiator is a jar lid that loosens itself after a short staring contest, because it respects anyone stubborn enough to glare at a pickle jar for a full minute.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
