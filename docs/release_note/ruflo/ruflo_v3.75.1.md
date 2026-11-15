---
title: "ruflo v3.75.1"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.1"
version: "v3.75.1"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "The bundled security package loads again (#4940, #4944). @claude-flow/cli 3.74.1 and 3.75.0, and the claude-flow umbrella, bundle @claude-flow/security 3.0.7."
---

# ruflo v3.75.1

## Fix

- **The bundled security package loads again** (#4940, #4944). `@claude-flow/cli` 3.74.1 and 3.75.0, and the `claude-flow` umbrella, bundle `@claude-flow/security` 3.0.7. It needs zod 4, but the wrappers ship zod 3, so importing it threw `z.config is not a function`. This affected the CLI's auth, proxy and doctor keychain paths. 3.75.1 ships zod 4.6.7 inside the bundled package; the CLI's own zod 3 is unchanged.
- The CI install smoke now packs the CLI the way a release does and imports every bundled package.

Thanks to @sparkling for the report and @Tong-bit-art for the first diagnosis (#4941).

## Also included (merged since 3.75.0)

- `@claude-flow/aidefence` 3.2.1: the documented `new AgentDB()` vector store works (#4933).
- Pattern-store downloads are verified with Ed25519 against a trusted key, with size and time limits (#4879).
- Memory and session imports are capped at 16 MiB; federation join only accepts a key file under `~/.ruflo` and the configured relay (#4821).
- `getEntry` is a pure read under sql.js (#4853).
- Federation defaults to `require-jcs` signatures (#4829). Peers that don't advertise JCS need `signatureMode: 'prefer-jcs'`.
- `hive-mind spawn --claude` keeps permission prompts on by default (#4850).
- `providers test -p openai` probes the saved endpoint (#4877).
- `cleanup --force` keeps a project's own `data/` and `memory/` and the user's hooks (#4859).
- Startup auto-update needs `RUFLO_AUTO_UPDATE`; dev Mongo binds to loopback; stricter federation handshake (#4907).
- Helper refresh rejects a manifest signed for another CLI version (#4847). The daemon dispatch queue lives in the user's state directory (#4519).
- `embeddings_neural` keeps an explicit `0` for `decayRate` and `driftThreshold` (#4830).

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.75.1` · 2026-11-10 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
