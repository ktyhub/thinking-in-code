---
title: "crush v0.98.0"
project: "crush"
repo: "charmbracelet/crush"
tag: "v0.98.0"
version: "v0.98.0"
published: "2026-10-08"
type: "minor"
lang: "en"
summary: "Hey! There’s some good quality of life stuff in this release. Let’s take a look!"
---

# crush v0.98.0

# Rex, OSC 7501, xAI/Grok OAuth and more

Hey! There’s some good quality of life stuff in this release. Let’s take a look!

## It’s Rex Time

Following an update on [Bubbletea](https://github.com/charmbracelet/bubbletea) Crush now supports the [Program Status Protocol](https://www.superlogical.com/rex/docs/build/program-status), aka `OSC 7501`, [created by Superlogical for Rex](https://www.superlogical.com/updates/public-testing-beginning)! As a bonus, [TUIOS](https://github.com/Gaurav-Gosain/tuios) also supports the protocol.

<p><img width="700" src="https://github.com/user-attachments/assets/85680681-9397-456b-8283-4eed19635681" /></p>

## x.AI OAuth

Now Crush supports Grok OAuth login. Enjoy!

<p><img width="550" src="https://github.com/user-attachments/assets/7663d52a-b5af-4969-972b-7db1189106b4" /></p>

## Many more fixes

A lot of fixes were introduced this version:

* Server side improvements by @meowgorithm 
* External editor swallowing empty buffer
* Models behind OAuth couldn't be used if they weren't in Catwalk
* Fixed MCP toggled misbehavior

And a lot more from @taciturnaxolotl. Read all below!

Good luck, 
Charm XX 👋🏻 

## Changelog
### New!
* 19e7dd4e9df41fcad81082de3471004cde4ab606: feat: OSC 7501 (#4041) (@andrinoff)
* 30145cbc8fbb1b33eeeaafb527328474eb20e093: feat: grok OAuth (#3833) (@andrinoff)
### Fixed
* 8b1d542c2ef1be9a3022f67363d696e53f31b0d4: fix(mcp): keep sessions alive when a server doesn't support ping (#4033) (@taciturnaxolotl)
* ca6ae26ce016b980407ce32f012a467ec10c1e2f: fix(ui): keep multi-line tool output aligned under sub-agent branches (#4019) (@taciturnaxolotl)
* 5e3fe4b563b31e75692f103b6c95c41588f07ac1: fix(ui): render multiline question answers as one line (#4020) (@taciturnaxolotl)
* 76cc5c574e15072b15aaed0f4f843a5711fae0d9: fix(ui): stop the attachment row from claiming files that are visible (@taciturnaxolotl)
* 011a9416c0624341420f9dc8787680308f45b994: fix: Toggle MCPs bug with global and local (#4042) (@andrinoff)
* 5f295a6f55dd93d718c3d843b002272beb972525: fix: change anim colors on previewTheme too (#4015) (@andrinoff)
* 65865e01950368379ad1f9746b620a77fb7a5da8: fix: exclude signing from test (#4035) (@andrinoff)
* b4dd6e6d48eee2c315d6d0690b84c06f14099838: fix: openEditor swallowing an empty buffer (#4007) (@andrinoff)
* 140e8cb9707faa6a68d87d0ecc3a85b9c65e25d5: fix: stop intermittent CI test failures across all three platforms (#4034) (@taciturnaxolotl)
### Other stuff
* bdcf796cb1ff241b0eb18139071d46a84dc1ee91: chore: auto-update files (@charmcli)
* 73d1a50a8b07cd0d296c63966ad9b26e7b105b4d: chore: jailbreak crush out of the meta repo (#4008) (@andrinoff)
* 2fbaa90b55ec711f713c35ed55602eeb789e6048: perf(prompt): read the current git branch without spawning a shell (@taciturnaxolotl)
* 08984f59d87587aa1cfd644b152034e644892def: refactor(ui): poll the git branch off the render path (@taciturnaxolotl)
* ee76ff2f206c6fe8e7c607ca6f4569de56787d80: server: add deadline to MCP fetch so hung server won't freeze UI (@meowgorithm)
* 5b7377befd23712e2c97b896425c8195e2a9c1ee: server: add support for git branches (@meowgorithm)
* 263a0201b0aac5e16781901103bcb0155cb911b2: server: back off MCP starting-state retries (@meowgorithm)
* 3297f43b9340996cd0de7507ae81b4b2422fb138: server: fix behavior where MCP status would not update in the UI (@meowgorithm)

---

<details>
<summary>Verifying the artifacts</summary>

First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download/v0.98.0/checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download/v0.98.0/checksums.txt.sigstore.json) files, for example, with `wget`:

```bash
wget 'https://github.com/charmbracelet/crush/releases/download/v0.98.0/checksums.txt'
wget 'https://github.com/charmbracelet/crush/releases/download/v0.98.0/checksums.txt.sigstore.json'
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

> **Source** [charmbracelet/crush](https://github.com/charmbracelet/crush) · `v0.98.0` · 2026-10-08 · [upstream release](https://github.com/charmbracelet/crush/releases/tag/v0.98.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
