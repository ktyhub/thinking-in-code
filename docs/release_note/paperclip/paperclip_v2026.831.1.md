---
title: "paperclip v2026.831.1"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.831.1"
version: "v2026.831.1"
published: "2026-09-02"
type: "patch"
lang: "en"
summary: "A patch on top of 2026.831.0 that fixes first-run onboarding. It carries a single targeted change; everything else in 2026.831.0 is unchanged."
---

# paperclip v2026.831.1

# Paperclip v2026.831.1

> Released: 2026-09-02

A patch on top of [2026.831.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.0) that fixes first-run onboarding. It carries a single targeted change; everything else in 2026.831.0 is unchanged.

## Fixes

- **Onboarding no longer gets stuck on the organization step.** On the first onboarding screen ("What is the name of your organization?"), clicking **Continue** created the organization on the server but could leave the wizard sitting on the same step — so the page appeared to just refresh, and repeated clicks silently created duplicate organizations. The company-created list refresh can make the surrounding app adopt the just-created organization before the create request's continuation runs; the wizard now recognizes that as the same successful transition and advances to the first-agent step, while a genuine switch to a different organization still stops with a clear message. ([#12667](https://github.com/paperclipai/paperclip/pull/12667))

## Upgrade Guide

- No migrations, no configuration changes, no API changes. Upgrade in place.

---

> **Source** [paperclipai/paperclip](https://github.com/paperclipai/paperclip) · `v2026.831.1` · 2026-09-02 · [upstream release](https://github.com/paperclipai/paperclip/releases/tag/v2026.831.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
