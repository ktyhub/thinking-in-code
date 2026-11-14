---
title: "browser-use 0.13.13"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.13"
version: "0.13.13"
published: "2026-10-15"
type: "patch"
lang: "en"
summary: "This release includes the OpenAI browser-tool driver and fixes two integration issues."
---

# browser-use 0.13.13

This release includes the OpenAI browser-tool driver and fixes two integration issues.

- Handle temporary empty Cloud tab URLs during navigation.
- Keep screenshots, crops, and pointer coordinates aligned on scaled displays.
- Provide 18 default browser tools and six optional actions through Browser Use Actor.
- Support local browsers, Browser Use Cloud, and borrowed browser sessions.

Install the `openai-tools` extra with OpenAI Python 3.31+. OpenAI 3.x uses httpx2; use its DefaultAsyncHttpxClient for custom HTTP clients.

Validation: all eleven driver tests pass. Both new regression tests fail on the earlier implementation. Pre-commit, type checks, package builds, and GitHub tests pass. Live remote-browser and library smoke tests passed; broader evaluation results remain separate.

This release supersedes 0.13.12, whose PyPI publication was cancelled before approval.

Guide: https://docs.browser-use.com/open-source/customize/integrations/openai
Driver: https://github.com/browser-use/browser-use/pull/6086
Fixes: https://github.com/browser-use/browser-use/pull/6089

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.13` · 2026-10-15 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
