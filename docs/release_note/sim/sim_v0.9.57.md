---
title: "sim v0.9.57"
project: "sim"
repo: "simstudioai/sim"
tag: "v0.9.57"
version: "v0.9.57"
published: "2026-11-14"
type: "patch"
lang: "en"
summary: "View changes on GitHub"
---

# sim v0.9.57

## Features

- feat(monaco): add Monaco CRM integration (#10009)
- feat(computer-use): batch 2-8 actions per call and read app state in one round trip per element (#9995)

## Improvements

- improvement(search): skip the Slack channel lookup on channel-scoped searches and read channel names in any script (#10023)
- improvement(credentials): hold unsaved keyless subjects so trust policies applied later still match (#10011)
- improvement(blocks): share the tool-call fallback helper and tidy the Hex/Stripe validation code (#10014)
- improvement(search): name matching Slack channels and say whether a filtered channel exists (#10007)
- improvement(search-mcp): log why a batched read returned an error for a document (#10010)
- improvement(search-mcp): log the field names a rejected tool call's arguments carry (#10003)
- improvement(computer-use): fold empty layout groups and compact the accessibility tree shown to the model (#9997)
- improvement(computer-use): remove the activity strip above the chat composer (#9994)

## Bug Fixes

- fix(computer-use): type after a focus click only once the caret is confirmed at the end (#10019)
- fix(hex): type the block projectVersion output as any and mark category descriptions optional (#10022)
- fix(credentials): cap the Databricks identity check with a deadline and report no hold for an unheld reconnect subject (#10021)
- fix(monaco): reject a stage key and a stage ID together on opportunity writes (#10020)
- fix(slack): let Block Kit messages carry notification text (#10018)
- fix(desktop-browser): refuse typing behind an unmarked full-screen modal or when no sampled point lands (#10013)
- fix(computer-use): tighten batch and click-to-focus edge cases from the staging audit (#10012)
- fix(google-drive): keep the page token an agent passes (#10008)
- fix(blocks): keep agent-supplied tool args that block mappers remap from dedicated fields (#10006)
- fix(hex,stripe): validate Hex and Stripe against their API docs (#10005)
- fix(computer-use): click an editor into focus when Accessibility cannot focus it (#10004)
- fix(aws-marketplace): check the container license's uncounted usage entitlement so every replica turns Enterprise on (#9996)

## Other Changes

- chore(credentials): move the IAM refusal TSDoc back onto iamFailureMessage (#10024)
- docs(library): update best-ai-agent-platforms-2026 (#10002)
- docs(library): update best-ai-agents-invoice-processing-finance-reconciliation-2026 (#10000)
- docs(library): update open-source-ai-agent-platforms (#10001)
- docs(library): update best-ai-agents-for-customer-support-automation (#9999)
- docs(library): update best-ai-agent-marketplaces-template-libraries (#9998)

## Contributors

- @waleedlatif1

[View changes on GitHub](https://github.com/simstudioai/sim/compare/v0.9.56...v0.9.57)

---

> **Source** [simstudioai/sim](https://github.com/simstudioai/sim) · `v0.9.57` · 2026-11-14 · [upstream release](https://github.com/simstudioai/sim/releases/tag/v0.9.57)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
