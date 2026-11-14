---
title: "crush v0.98.2"
project: "crush"
repo: "charmbracelet/crush"
tag: "v0.98.2"
version: "v0.98.2"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "This patch was brought to you by our team and our favorite contributors!"
---

# crush v0.98.2

# Keanu, OAuth re-sign-in and a crash fix

This patch was brought to you by our team and our favorite contributors!

## The Keanu Theme

> [!CAUTION]
> This **will** make you feel like a hacker

<img width="800" src="https://github.com/user-attachments/assets/061f5473-9f78-49a4-8aa5-dc54ae955189" />

A theme made by @andreynering 🎉 💻 

## Fixed!

• Fixed a crash when parallel tool calls finish together, by @andreynering
• Fixed OAuth sign-in and credential refresh, by @taciturnaxolotl
• Ctrl+C now interrupts startup, and custom provider model discovery no longer stalls it, by @taciturnaxolotl
• Fixed server prompts and permission requests being scoped to the wrong session, by @meowgorithm
• Fixed the TUI status, spinner and tool-header display, by @taciturnaxolotl

Good luck, Charm XX

## Changelog
### New!
* cd5f15d366f516c992ec8331f0bc158708bb69ec: feat(openrouter): send app attribution headers and session_id for sticky routing (#4115) (@Lee-Si-Yoon)
* a8a8ec8aaeef8464ede0461407621f1e081a29c1: feat: add a built-in `keanu` theme (#3955) (@andreynering)
* 78b6edb353f3fb11178c7e38bbac762772dfb8b0: feat: publish optional signed Packslip release manifests (#4085) (@jdx)
### Fixed
* 20e73b45baaff59bf192887e177a90e9927ba40c: fix(agent): ask every OAuth sign-in to sign in again on a 401 (@taciturnaxolotl)
* 02336b1a678d2cece3a7b89cef2c5379ece63dd2: fix(agent): give sub-agents the renewed credential after a refresh (@taciturnaxolotl)
* acbf1a717c16a47c86d2277bcf3ebff8b91edd85: fix(agent): prevent crash when parallel tool calls finish together (#4129) (@andreynering)
* a299286afa22b81ae39f77a2d6bd532a2cd95bb2: fix(agent): publish run-complete when a run fails during setup (@taciturnaxolotl)
* ddf6f26b461089a56825a34d5ee922f67425f80b: fix(auth): ask for a new sign-in whenever a provider rejects the credential (@taciturnaxolotl)
* e660fd9eb967752391756b1a694c2a6b26c4701b: fix(auth): stop retrying a refresh token the provider already refused (@taciturnaxolotl)
* 510f6ea386ad4d341410e47a3d5a07a69e96d2b2: fix(bash): stop finished jobs from using up the background job budget (#3869) (@taciturnaxolotl)
* 8fa35a0f10e675aae222fe8626d2d13c2dcb49f5: fix(ci): remove duplicate permissions block that broke the release workflow (@taciturnaxolotl)
* 94f9364511033ca0242aebd8d3f8d10242b83328: fix(ci): scope workflow token permissions to least privilege (@taciturnaxolotl)
* 00560cea759813e2a8f2c782a3a9131cb9811b52: fix(lint): stop gofumpt versions fighting over the session pager return (#4088) (@taciturnaxolotl)
* b0f7811828a6775d7fa77fdac3cde162dd45aa30: fix(login): open the browser as a command so tests never launch it (#4071) (@taciturnaxolotl)
* 1dbd303a64811a6752d3b7083f87b88d40989ee4: fix(tools): create parent dirs only after write permission is granted (@taciturnaxolotl)
* d65d6850ca4ed4971e4cb1a3bebd960a79cc167b: fix(tools): drop empty images instead of failing the whole request (#3891) (@taciturnaxolotl)
* f530936498c3a80d6262f32afa00b79764b3edfb: fix(tools): let the agent recover from failed web requests (#4086) (@andreynering)
* 6a12bc6160f2f2a4f682d597448af524dd2c78ba: fix(ui): bring back the chat scrollbar's auto-hide (#4084) (@andreynering)
* 0b750897625b233a87f9556e142caf74e8ff13a5: fix(ui): end a turn when the agent says the run is over (@taciturnaxolotl)
* 12f96b4acd8f36312befbbf6fe7459da9ca07a72: fix(ui): give every status message its own time on screen (#3896) (@taciturnaxolotl)
* 6eb691007ce3a2084f8efc13490047bbf970e1a9: fix(ui): keep the background flag colored in the bash tool header (@taciturnaxolotl)
* fdcc7a100eba60b471ff6920a5ca34a5b922d53f: fix(ui): keep the question gutter bar unbroken when a choice wraps (@taciturnaxolotl)
* a48dabea1a3562b24c39cc7f0dec10e867f8499b: fix(ui): keep the terminal's done and error status from vanishing (#4046) (@taciturnaxolotl)
* c89ef9d3d1a7a6ad16519be952dd2862a3376264: fix(ui): show grep search parameters in pending tool state (#2070) (@LarsArtmann)
* ddf6ccc86f09337a3249a6465ca5609c4c167d7a: fix(ui): show the turn spinner from the moment a prompt is sent (@taciturnaxolotl)
* c446d3f0ddf59089ff43a617dd4f3ee233f01892: fix: grype (#4062) (@andrinoff)
* 17e428f625937bb803ddd95860b33620b35c7533: fix: let Ctrl+C interrupt Crush startup (@taciturnaxolotl)
* 1f5d7f0b775f3b370be657c49bc4f9198b3ec861: fix: measure provider silence only (#4031) (@andrinoff)
* 623ba438144410d6c6f594c262f6efee37e08ed9: fix: never leave a tool call waiting for an answer that cannot come (@taciturnaxolotl)
* 17fccc0c6d4289f159384d3aaa7315ef1f71015b: fix: show which model answered Prism-routed session summaries (#4116) (@andreynering)
### Docs
* 205e2fa88924a4b2a250172ffdbd5f5c2a972881: docs(install): note npm supports macOS, Linux, and Windows (#3195) (@truffle-dev)
* 75727040f2bfc12d4836075a5cc3a9e014f5c5c8: docs: Updated hooks config from legacy crush.json syntax (#3956) (@KevinFumbles)
* f5aa29304cbd68efdf6124f6404be404baeda54f: docs: add missing XAI_API_KEY to environment variables table (#3291) (@albatrossflyon-coder)
* 646d2bc8333dbe2d1eaab735913b953860aff0d4: docs: fix capitalization in the beginning sentence and word abbreviation (@afsuyadi)
* f68ddeb914de2e4f5a45de19d6013ae75a42aa91: docs: fix missing apostrophe (@afsuyadi)
* 3e0b0bff4c79828020bfd0a4774b22a578013851: docs: fix mistyped word in comment line (@afsuyadi)
* 2ecab34047c188c81edcdf0ccc0c180d9aa9fec3: docs: fix typos in README.md (#3816) (@cloudcodec)
* b46cd7a3b4901f83197486dc7b7a9083beeb061f: docs: remove the free subscription (#4128) (@andrinoff)
* dd3018e1b76274f1078287fe904465c29e754651: docs: replace gpt-4 in the Nix configuration example (@pcbeingused333)
### Other stuff
* 37a60b5027a7563989c9f95b407549f02294e463: Fix typo in data retention description (#3560) (@cobein27)
* 0c16d5f4b49ce81dfdf09f8233adab15d71f9b55: chore: auto-update files (@charmcli)
* 7ba09f3fa40d6ce306ac567e7a626143c979da69: chore: auto-update files (@charmcli)
* 699ceeb9c3e9b1af02c3ae3b974cc9278be2a556: chore: auto-update files (@charmcli)
* c32b779e5a8f2577b867594d38de675456203399: chore: gofumpt (@andreynering)
* 7dadde0bb47649882891ab7943d17176e9b1c9c8: perf: stop custom provider model discovery from stalling startup (@taciturnaxolotl)
* 80374e797db01e65854643ef137302edcd49c306: server: broadcast prompt events that carry an empty session ID (@meowgorithm)
* f1425bd3745fd1bcf9b34b5ca1a6af61f8c593ff: server: fail open prompts for clients that never report a session (@meowgorithm)
* e890891518aae670bed3230a09eb02e993b4d220: server: memoize root session resolution per workspace (@meowgorithm)
* 305e072bcf4eee562f5e09cdd736246693a35d8f: server: scope permission/question prompts to the current session (@meowgorithm)

---

<details>
<summary>Verifying the artifacts</summary>

First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download/v0.98.2/checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download/v0.98.2/checksums.txt.sigstore.json) files, for example, with `wget`:

```bash
wget 'https://github.com/charmbracelet/crush/releases/download/v0.98.2/checksums.txt'
wget 'https://github.com/charmbracelet/crush/releases/download/v0.98.2/checksums.txt.sigstore.json'
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

> **Source** [charmbracelet/crush](https://github.com/charmbracelet/crush) · `v0.98.2` · 2026-10-23 · [upstream release](https://github.com/charmbracelet/crush/releases/tag/v0.98.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
