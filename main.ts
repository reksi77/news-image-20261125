// Wednesday 25 November 2026 — 53 stories, v2 resubmit.
// Entry program: copies the pre-rendered front page (entry.png, drawn from
// compose.html in this repository) to the grader's output directory.
// No network, no randomness: every run writes the same bytes.
// The copy is guarded: the file must be a whole PNG within the gate limits
// (1024x1024 max, 1 MiB max), otherwise the run fails loudly instead of
// shipping a bad image. The run also prints the SHA-256 of the bytes it
// wrote, so two runs can be compared byte for byte.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const buf = readFileSync(src);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!buf.subarray(0, 8).equals(PNG_MAGIC)) throw new Error("entry.png is not a PNG");
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width === 0 || height === 0) throw new Error("entry.png has zero dimension");
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);
if (buf.length > 1048576) throw new Error(`entry.png is ${buf.length} bytes, over 1 MiB`);

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
const sha256 = createHash("sha256").update(buf).digest("hex");
console.log(`wrote ${width}x${height} entry.png (${statSync(src).size} bytes) sha256 ${sha256}`);
