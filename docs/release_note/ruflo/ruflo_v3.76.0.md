---
title: "ruflo v3.76.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.76.0"
version: "v3.76.0"
published: "2026-11-11"
type: "minor"
lang: "en"
summary: "Nearest-centroid agent router (ADR-527, #4953). Set CLAUDE_FLOW_ROUTER_CENTROID=1 to route tasks to agents by nearest centroid over labelled examples."
---

# ruflo v3.76.0

## @claude-flow/cli, claude-flow and ruflo 3.76.0

### New (opt-in)
- **Nearest-centroid agent router (ADR-527, #4953).** Set `CLAUDE_FLOW_ROUTER_CENTROID=1` to route tasks to agents by nearest centroid over labelled examples. On the ADR-391 test split it picked the right agent 63.7% of the time, against 25.7% for the current default. The default router is unchanged. Before it becomes the default, it still needs a cost-per-verified-solve test on fresh tasks.

### Fixes
- **Neural router assets now ship in the npm package (#4958, fixes #4954).** With `CLAUDE_FLOW_ROUTER_NEURAL=1`, an npm install now loads the bundled KRR model, the low/med/high bucket specialists and their calibrators, and the seed rows. Before this, only a repo checkout could load them.
- **darwin pin moved to `~0.14.0` (#4956, fixes #4952).** This fixes the `clean-install` and `pin-drift` CI failures. Without a surrogate config, darwin 0.14.0 behaves as 0.13.1.
- **Bridge pins agentic-flow to stable 3.5.4 (#4948).** It now lists only the tools that version exposes.
- **Witness reports an unbuilt checkout as "not built" (#4946, #4885).** Real failures are no longer hidden behind that state.
- **MetaHarness bench parity (#4949, #4930).** A 404 in the digest is no longer misclassified as degraded.
- **`task_complete` credits only the worker still holding the task (#4964).** Completing a reopened task again no longer counts the same work twice. Thanks @kevin9327.
- **The settings risk scanner flags `node`, `deno`, `bun` and `php` allow-rules (#4961, #4960).** `ruflo init --upgrade` now warns when a project pre-approves these interpreters, as it already did for `python`, `ruby` and `perl`.
- **`hooks route` shows "centroid" as the method** when the centroid router decides, instead of "keyword".

### Dependencies
- `@claude-flow/memory` 3.3.2 and `agentdb` ^3.10.0 (#4955).

The `alpha` and `v3alpha` dist-tags stay at 3.75.2 (ADR-513).

🤖 Generated with [RuFlo](https://github.com/ruvnet/ruflo)

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.76.0` · 2026-11-11 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.76.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
