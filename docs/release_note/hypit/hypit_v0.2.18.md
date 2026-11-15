---
title: "hypit v0.2.18"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.18"
version: "v0.2.18"
published: "2026-10-08"
type: "patch"
lang: "en"
summary: "Frame animations of later Presents render at the right time again. Since 0.2.15, a lifecycle motion (for example enter: fade) on an Item that starts after frame 0 was evaluated at absolute composition time, so the Item…"
---

# hypit v0.2.18

## Highlights

- **Frame animations of later Presents render at the right time again.** Since 0.2.15, a lifecycle `motion` (for example `enter: fade`) on an Item that starts after frame 0 was evaluated at absolute composition time, so the Item skipped its fade or stayed invisible for most of its window. Animations now follow their own Present's time, as in 0.2.13. (#373, fixes #372)
- **Still-image clips keep their colors.** Pictures turned into video are now converted with the BT.709 matrix and tagged, so players no longer shift the colors of HD still clips. (#363)
- **Alpha sources normalize about 9x faster.** The lossless VP9 encode for video with transparency now runs at libvpx's fastest speed. Decoded frames are identical. (#383, fixes #382)
- **`hypit media fetch` works with TikTok.** The locked yt-dlp environment now includes `curl_cffi`, so yt-dlp can impersonate a browser. (#384, fixes #381)
- **Frame-boundary errors surface before Build.** A Timeline `end` or Take `at` that does not land on a whole frame (for example `end="8s"` at 30000/1001 fps) is now reported by `hypit check` when the Clock is static (#355, fixes #354). `hypit plan` also reports any Producer failure in a step that carries no request, and exits 1 instead of calling the plan valid (#348).

## Upgrade

Install `@hypit/hypit@0.2.18`. Existing video projects and materials need no migration.

If you have already run `hypit media prepare-fetch`, run it once more so the prepared environment picks up `curl_cffi`.

`hypit.cli-plan@1` output gains `producerFailureCount`, present on every plan, and `producerFailures`, present when it is non-zero.

## Validation

CI passed on Linux and Windows for the release candidate on `main`.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.2.18` · 2026-10-08 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.18)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
