---
title: "browser-use 0.13.12"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.12"
version: "0.13.12"
published: "2026-10-15"
type: "patch"
lang: "en"
summary: "Add OpenAI browser tools backed by Browser Use Actor."
---

# browser-use 0.13.12

Add OpenAI browser tools backed by Browser Use Actor.

- Import `BrowserUse` from `browser_use.integrations.openai`.
- Install `browser-use[openai-tools]` to enable OpenAI Python 3.31+.
- Use local browsers, Browser Use Cloud, or an existing connected BrowserSession.
- Support the 18 default browser tools and six optional actions.
- Preserve borrowed browser ownership and check Cloud browser cleanup.
- Preserve URL and timeout settings across OpenAI 2.x and 3.x model wrappers.

OpenAI 3.x uses httpx2. For custom HTTP clients, use OpenAI's DefaultAsyncHttpxClient.

This integration does not yet provide uploads, downloads, scoped reads, console/network diagnostics, or Bash.

Validation: 35 integration/model tests passed, two skipped; OpenAI 2.26 compatibility: 15 passed, one skipped. All pull-request checks passed. Live Cloud navigation and element-reference click tests passed with provider-confirmed cleanup.

Implementation: https://github.com/browser-use/browser-use/pull/6086
Cloud tests: https://github.com/browser-use/new-eval-platform/actions/runs/38824343560

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.12` · 2026-10-15 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.12)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
