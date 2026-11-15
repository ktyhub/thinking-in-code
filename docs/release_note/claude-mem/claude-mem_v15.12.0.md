---
title: "claude-mem v15.12.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.12.0"
version: "v15.12.0"
published: "2026-11-07"
type: "minor"
lang: "en"
summary: "Kept by default: screenshots and images your agent reads or makes are now kept and linked to the observations from that turn, without sending them to an AI model. Image inference stays off (#5426)."
---

# claude-mem v15.12.0

## Images are kept by default and show in My Work

- **Kept by default:** screenshots and images your agent reads or makes are now kept and linked to the observations from that turn, without sending them to an AI model. Image inference stays off (#5426).
- **"Keep images" switch:** the memory viewer's Settings has a new **Images** section. Turning **Keep images** off stops keeping new images; images already kept stay. A `"false"` you saved yourself is respected (#5426).
- **Gallery in My Work:** request cards show an image count and the first four thumbnails; the request drawer shows every linked image; any thumbnail opens a full-size gallery with keyboard navigation (#5427).
- **Fresh databases:** My Work lists observation activity again on a newly created database (#5427).
- **Local conversion you can rely on:** captured screenshots now convert on your own computer instead of failing as busy or timing out. Conversions wait their turn and get 20 seconds each, and every stored copy is lossy WebP so it stays small (#5431).
- **Cloud quota:** each owner can store up to 25 GiB of images on cmem.ai, the same limit Pro enforces (#5467).

## Fixes

- **Sessions:** after you delete a session in the viewer, new work in the same resumed conversation is captured again (#5463).
- **Sessions:** committed transcript entries are no longer replayed after a worker restart (#5321, thanks @lamimiahmed45-droid).
- **Hooks:** Grok Build's camelCase hook payload is accepted (#4282, thanks @nathan-v).
- **Hooks:** PreToolUse memory lookups are scoped to the current platform, so one harness no longer gets another's observations (#5008, thanks @SuperMarioYL).
- **My Work:** the scheduled refresh stays on the configured agent instead of falling back to another one (#5245, thanks @Dev-0710).
- **Claude CLI:** the Claude CLI is found again when `CLAUDE_CODE_PATH` changes (#5460, thanks @WhitePepperLambSoup).
- **Security:** `CLAUDE_MEM_DATA_DIR` and `CLAUDE_MEM_WORKER_HOST` can no longer be changed through `POST /api/settings`, and an OpenClaw reinstall keeps every existing setting (#5147, thanks @Wenjix).
- **Settings:** the Grok Bot awareness pilot agent IDs are no longer shipped as defaults (#4970, thanks @zichen0116).
- **Sync:** a backlogged sync drains instead of stalling, and `projection_busy` replies carry `Retry-After` (#3488).
- **Sync hub:** fewer Durable Object row writes per request (#4424, thanks @necatisozer) and no re-serializing of a page per operation when counting its bytes (#4937, thanks @devkancheti4-design).

## Also in this release

- **My Work:** leads with what's moving, groups cards by state and animates live changes (#5365).
- **My Work:** text is written in the owner's language, with an opt-in language setting (#5156, thanks @mehmetcelik7).
- **Interface:** opt-in Simplified Chinese for the worker interfaces (#5325, thanks @h6rime).
- **Observer health:** clearer SessionStart quota notices (#5134).
- **Installer:** the optional email and "how can we help" question is back, asked once in an interactive terminal only; sign-in is only for CMEM Pro (#5218).
- **Claude app plugin:** renamed to `cmem-pro`, carries the cmem.ai connector, and no longer captures memory lookups back into memory (#4570).
- **Providers:** cheapaimodel (#5158, thanks @nicho810) and Obscurify.ai (#5165, thanks @tonydavis629) presets for the OpenAI-compatible provider.
- **Smart read:** Delphi/Pascal support (#4953, thanks @nm3xyz).
- **Skills:** new community-sweep skill (#4374); oh-my-issues starts its cluster pass blind and adds an open-PR pass (#3617); the version-bump skill refuses to run outside thedotmack/claude-mem (#4575, thanks @somil14).
- **Docs:** the README says the observer trial goes through a payment-method checkout (#5087, thanks @Iyanuoluwa007).

**Full changelog:** https://github.com/thedotmack/claude-mem/compare/v15.11.1...v15.12.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.12.0` · 2026-11-07 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
