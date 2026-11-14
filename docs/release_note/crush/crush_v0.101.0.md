---
title: "crush v0.101.0"
project: "crush"
repo: "charmbracelet/crush"
tag: "v0.101.0"
version: "v0.101.0"
published: "2026-11-12"
type: "minor"
lang: "en"
summary: "This release was brought to you by our team and our favorite contributors! Long awaited features ahead, read along!"
---

# crush v0.101.0

# Skill toggles, tool timers and a faster Hyper ⚡

This release was brought to you by our team and our favorite contributors! Long awaited features ahead, read along!

## Toggle skills

<img width="600" alt="Screenshot 2026-11-12 at 19 58 39" src="https://github.com/user-attachments/assets/99d45606-bdb9-4f99-8501-72fa7fc4c648" />


Skills can now be switched on and off right from the command palette. Broken skills are easy to spot, too! (they're marked with a red × and the reason they failed)

## 🕐 How long is this taking?

<img width="600" alt="Screenshot 2026-11-12 at 19 59 37" src="https://github.com/user-attachments/assets/f820006e-64d7-40af-9cce-d8c87e1fbf44" />

Every tool call now shows how long it's been running. Now, you'll know whether that test suite is just slow or actually stuck.

## Lighter, faster Hyper ⚡ 

Requests to Hyper are now compressed with [Brotli](https://brotli.org/) 🥦. That means much smaller uploads on every turn and snappier responses, especially in long sessions. Hyper now also supports [Gzip](https://www.gzip.org/) that other agents could use when Brotli if not viable.

Big thanks to @BrunoKrugel for the first 2 awesome features!

See more below ⬇️ 

Have a great Thursday,
Charm XX 🌞 

## Changelog
### New!
* 2b7816fed084f029f4061e441a6f9f3980e71c21: feat(skill): toggle skills (#3994) (@BrunoKrugel)
* 7f9e4824c465e1ffa1a1d652dd6e9a897b54035c: feat(ui): Add elapsed time on tool call (#3600) (@BrunoKrugel)
* f38c0dc030912cc3eeaa82cfb014cf21868405b0: feat: add CRUSH_DATA_DIR env var to override the project data directory (#4245) (@andreynering)
* ebca1dc9328ad91946f25c9bf5a90d6ce8118d6b: feat: persist model display name on messages (#4243) (@andreynering)
* fedf5b82b392d2e02226b196c83f593c03d27803: feat: pipe question tools (#4209) (@andrinoff)
### Fixed
* c0f19dfff04ee91606a472ce0f870053c033b6b4: fix(agent): stop a cancelled or silent stream instead of hanging the turn (@taciturnaxolotl)
* 03b24e5e288fc2e978ccb2f5410e1453ae0be375: fix(fetch): preserve JSON number precision (#4131) (@Ricardo-M-L)
* 67d838fa00d4939e1a95ff93950a374cd1225146: fix(permissions): make yolo mode block dangerous commands without asking (@taciturnaxolotl)
* fa57a398a10e4742f856f5999bc78bee1a9bad78: fix(run): stop subagents from hanging on permission prompts (#3365) (@Amolith)
* 8f1f02951cabc30b82e497fd916ca434bad1e6f4: fix(ui): clamp dialog and shell scroll offsets when their content changes size (@taciturnaxolotl)
* 18861551f081aed2ff3cd48a516423d87a5f49a4: fix(ui): keep scrolled lists anchored when content shrinks or goes away (@taciturnaxolotl)
* 9698a7c777db8f1a542f70680e399e03dad8839d: fix(ui): preserve CRLF lines in bang mode output (#4228) (@remote-controlled-man)
* 66b433f7865a9521f0df284f8b5b3ffa2f6c2d00: fix(ui): render question answers from structured data, not parsed text (#3903) (@taciturnaxolotl)
* f3c51b9e4d8b447717c10325fc4ed50e75c963c2: fix(ui): show a sent prompt instantly in long chats (@taciturnaxolotl)
* 9baf089c85b72794247b0297517ba454c151543a: fix: bump snapshots and releases version (@andrinoff)
* 5e5c8c00551661ebd8f687ce6a285bbe8b4c112a: fix: crush run should not spawn a server if none is running (#4255) (@andrinoff)
* cd3cbd88c80e59440eb9bb1ba55f4ce88279b51d: fix: exit cleanly when the TUI is started without a terminal (@taciturnaxolotl)
* be06016c26afc1f82e6a43005a292f995e2b9a8d: fix: pin fantasy to v0.46.0 (@taciturnaxolotl)
* a191a19cd64484c064977eb3005b4d4807cdcea7: fix: remove the Alias with hyper email (#4257) (@andrinoff)
### Other stuff
* feede8816912d5c8863a4fae1a41518386f9bfcf: chore: add a few portuguese names to sub-agents names list (@andreynering)
* d855def347893a18955655bd4527a2bf13ae4744: chore: auto-update files (@charmcli)
* ad71b6d0ce3fa842291e27d76ec4acf2910d9253: chore: use the new charm.land/tone (#4260) (@andrinoff)
* 1b7582dbba81e0f716e50f20fe44bd04faf7251f: perf(agent): prefer brotli for compressed requests to hyper (#4265) (@andreynering)
* 1b37350c8afb8d905cfa67a941ba495d554d4141: perf: send gzip-compressed http requests to hyper (#4100) (@andreynering)
* f1cdae4db0939101b568c0ff8434f86621793d07: refactor(agent): own cancel and timeouts in one request guard (@taciturnaxolotl)
* c98fc5459982d35fd6152718ad1148c0256625bd: ui: theme the exit banner (#4239) (@Amolith)

---

<details>
<summary>Verifying the artifacts</summary>

First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download/v0.101.0/checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download/v0.101.0/checksums.txt.sigstore.json) files, for example, with `wget`:

```bash
wget 'https://github.com/charmbracelet/crush/releases/download/v0.101.0/checksums.txt'
wget 'https://github.com/charmbracelet/crush/releases/download/v0.101.0/checksums.txt.sigstore.json'
```

Then, verify it using [`cosign`](https://github.com/sigstore/cosign):

```bash
cosign verify-blob \
  --certificate-identity-regexp '^https://github.com/charmbracelet/crush/\.github/workflows/(release|nightly)\.yml@' \
  --certificate-oidc-issuer 'https://token.actions.githubusercontent.com' \
  --bundle 'checksums.txt.sigstore.json' \
  ./checksums.txt
```

If the output is `Verified OK`, you can safely use it to verify the checksums of other artifacts you downloaded from the release using `sha256sum`:

```bash
sha256sum --ignore-missing -c checksums.txt
```

Done! You artifacts are now verified!

</details>

<a href="https://charm.land/"><img alt="The Charm logo" src="https://stuff.charm.sh/charm-banner-next.jpg" width="400"></a>

Thoughts? Questions? We love hearing from you. Feel free to reach out on [X](https://x.com/charmcli), [Discord](https://charm.land/discord), [Slack](https://charm.land/slack), [The Fediverse](https://mastodon.social/@charmcli), [Bluesky](https://bsky.app/profile/charm.land).

---

> **Source** [charmbracelet/crush](https://github.com/charmbracelet/crush) · `v0.101.0` · 2026-11-12 · [upstream release](https://github.com/charmbracelet/crush/releases/tag/v0.101.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
