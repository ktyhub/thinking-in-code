---
title: "crush v0.98.1"
project: "crush"
repo: "charmbracelet/crush"
tag: "v0.98.1"
version: "v0.98.1"
published: "2026-10-09"
type: "patch"
lang: "en"
summary: "This fixes new GPT-6 models via Copilot!"
---

# crush v0.98.1

# Tiny patch

This fixes new GPT-6 models via Copilot!

Enjoy,
Charm XX 💫

## Changelog
### Fixed
* 8584922dc75b0911bf5dea2cbaec64af557f7a45: fix: route newer Copilot models through the Responses API (#4048) (@DaVinci42)

---

<details>
<summary>Verifying the artifacts</summary>

First, download the [`checksums.txt` file](https://github.com/charmbracelet/crush/releases/download/v0.98.1/checksums.txt) and the [`checksums.txt.sigstore.json` file](https://github.com/charmbracelet/crush/releases/download/v0.98.1/checksums.txt.sigstore.json) files, for example, with `wget`:

```bash
wget 'https://github.com/charmbracelet/crush/releases/download/v0.98.1/checksums.txt'
wget 'https://github.com/charmbracelet/crush/releases/download/v0.98.1/checksums.txt.sigstore.json'
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

> **Source** [charmbracelet/crush](https://github.com/charmbracelet/crush) · `v0.98.1` · 2026-10-09 · [upstream release](https://github.com/charmbracelet/crush/releases/tag/v0.98.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
