---
title: "context7 @upstash/context7-mcp@4.7.0"
project: "context7"
repo: "upstash/context7"
tag: "@upstash/context7-mcp@4.7.0"
version: "@upstash/context7-mcp@4.7.0"
published: "2026-11-12"
type: "release"
lang: "en"
summary: "d451493: Add a page argument to the get-upgrade-guide research preview tool: a long guide now comes in pages, each in full detail."
---

# context7 @upstash/context7-mcp@4.7.0

### Minor Changes

- d451493: Add a `page` argument to the `get-upgrade-guide` research preview tool: a long guide now comes in pages, each in full detail. Page 1 starts with everything needed to migrate (summary, before you start, codemods, breaking changes, deprecations), which continues on the next pages when it is longer than one page; behavior, config and API changes follow. A guide is served only once it is complete, so its pages always fit together; until then the tool says it is being prepared and when to call again, or that it could not be prepared.

### Patch Changes

- f2daacb: `get-upgrade-guide` no longer tells the agent never to retry a guide that could not be prepared: the agent uses `query-docs` now and calls again only after the time the answer gives. Telemetry records an unavailable guide as `unavailable` and a page past the last as `invalid`, instead of `not_found`; neither is shown to the agent as an error.

---

> **Source** [upstash/context7](https://github.com/upstash/context7) · `@upstash/context7-mcp@4.7.0` · 2026-11-12 · [upstream release](https://github.com/upstash/context7/releases/tag/%40upstash/context7-mcp%404.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
