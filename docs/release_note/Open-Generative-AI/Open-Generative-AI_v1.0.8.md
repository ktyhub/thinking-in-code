---
title: "Open-Generative-AI v1.0.8"
project: "Open-Generative-AI"
repo: "Anil-matcha/Open-Generative-AI"
tag: "v1.0.8"
version: "v1.0.8"
published: "2026-04-27"
type: "patch"
lang: "en"
summary: "Windows build restored. v1.0.7 shipped Mac-only because the root tailwindcss was on v4 while workspace packages were on v3 — the v3/v4 mismatch broke the Windows electron build."
---

# Open-Generative-AI v1.0.8

## What's new

- **Windows build restored.** v1.0.7 shipped Mac-only because the root `tailwindcss` was on v4 while workspace packages were on v3 — the v3/v4 mismatch broke the Windows electron build. v1.0.8 completes the revert to Tailwind v3 across the root app (CSS directives, vite config, postcss config) so the Windows installer builds and runs again.

## Downloads

- **Windows (x64)** — `Open Generative AI Setup 1.0.8.exe` (unsigned NSIS installer; click *More info → Run anyway* on the SmartScreen warning)
- macOS users: stay on [v1.0.7](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.7) — there are no macOS-affecting changes in v1.0.8.

## Notes

The Windows installer is **not code-signed**. SmartScreen will warn on first install — this is expected.

---

> **Source** [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) · `v1.0.8` · 2026-04-27 · [upstream release](https://github.com/Anil-matcha/Open-Generative-AI/releases/tag/v1.0.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
