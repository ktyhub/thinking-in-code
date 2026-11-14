---
title: "OpenHands pr19394-evidence"
project: "OpenHands"
repo: "OpenHands/OpenHands"
tag: "pr19394-evidence"
version: "pr19394-evidence"
published: "2026-11-05"
type: "release"
lang: "en"
summary: "Temporary evidence assets for OpenHands/OpenHands#19394. Browser click-through of automation setup dead ends and decoded PostHog automationsetupblocked payloads. This release is evidence storage only and can be deleted…"
---

# OpenHands pr19394-evidence

Temporary evidence assets for OpenHands/OpenHands#19394. Browser click-through of automation setup dead ends and decoded PostHog automation_setup_blocked payloads. This release is evidence storage only and can be deleted after PR review.

<!-- macos-install-note -->
### macOS install note

The app isn't signed with an Apple Developer ID yet, so macOS may call a
downloaded build *"damaged"* — it's Gatekeeper quarantine, not a bad file.
After moving the app to Applications, clear the flag once, then open normally:

```sh
xattr -dr com.apple.quarantine "/Applications/OpenHands Agent Canvas.app"
```

Signing + notarization is tracked in OpenHands/OpenHands#16774.

---

> **Source** [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) · `pr19394-evidence` · 2026-11-05 · [upstream release](https://github.com/OpenHands/OpenHands/releases/tag/pr19394-evidence)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
