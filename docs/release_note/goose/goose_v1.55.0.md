---
title: "goose v1.55.0"
project: "goose"
repo: "aaif-goose/goose"
tag: "v1.55.0"
version: "v1.55.0"
published: "2026-10-16"
type: "minor"
lang: "en"
summary: "AIgateway declarative provider #12528 · Propagate W3C trace context from ACP prompts to MCP tool calls #12697 · Surface provider x-request-id on responses and errors #12587"
---

# goose v1.55.0

## ✨ Features

- AIgateway declarative provider [#12528](https://github.com/aaif-goose/goose/pull/12528)
- Propagate W3C trace context from ACP prompts to MCP tool calls [#12697](https://github.com/aaif-goose/goose/pull/12697)
- Surface provider x-request-id on responses and errors [#12587](https://github.com/aaif-goose/goose/pull/12587)
- Honor supports_vision declared on custom provider models [#12769](https://github.com/aaif-goose/goose/pull/12769)
- Use live model metadata for OpenAI reasoning and prefer the Responses API [#12568](https://github.com/aaif-goose/goose/pull/12568)
- Cap auto-compaction at 225k tokens by default [#12790](https://github.com/aaif-goose/goose/pull/12790)
- Improve askai bot relevance [#12728](https://github.com/aaif-goose/goose/pull/12728)

## 🐛 Bug Fixes

- Adaptive thinking for Claude Sonnet and Haiku 5.5 [#12761](https://github.com/aaif-goose/goose/pull/12761)
- Reject malformed GOOSE_MODE across ACP providers [#12846](https://github.com/aaif-goose/goose/pull/12846)
- Bedrock: don't retry non-context ValidationException on converse_stream [#12710](https://github.com/aaif-goose/goose/pull/12710)
- OpenRouter: do not set transforms field unconditionally [#11374](https://github.com/aaif-goose/goose/pull/11374)
- Apply long-context price tiers to cost estimates [#12787](https://github.com/aaif-goose/goose/pull/12787)
- Finish pending tools before enforcing max turns [#12702](https://github.com/aaif-goose/goose/pull/12702)
- Not offer delegate to code-mode scripts [#12711](https://github.com/aaif-goose/goose/pull/12711)
- Anthropic: forward unknown request_params to wire, mirroring openai engine [#12720](https://github.com/aaif-goose/goose/pull/12720)
- Desktop: show copy button on messages with thinking blocks [#12726](https://github.com/aaif-goose/goose/pull/12726)

## 🔧 Improvements

- Bind subagents by their parent's hooks, mode and approvals [#12802](https://github.com/aaif-goose/goose/pull/12802)
- Lease a session's selection and start each extension on first use [#12775](https://github.com/aaif-goose/goose/pull/12775)
- Make Stop end the run promptly and save what it produced [#12765](https://github.com/aaif-goose/goose/pull/12765)
- Make tool operations own tool call checks [#12865](https://github.com/aaif-goose/goose/pull/12865)
- Not infer or steer while a tool approval is pending [#12808](https://github.com/aaif-goose/goose/pull/12808)
- Leave the login-shell PATH to whoever launches goose [#12799](https://github.com/aaif-goose/goose/pull/12799)
- Build turns from the session record: derive recipe prompt parts, persist prompt, goal and container [#12730](https://github.com/aaif-goose/goose/pull/12730)
- Add ProviderManager and route session providers through it [#12745](https://github.com/aaif-goose/goose/pull/12745)
- Use typed structs for openai message formatting [#12725](https://github.com/aaif-goose/goose/pull/12725)
- Remove background subagents and orchestrator; make Doctor session-only [#12729](https://github.com/aaif-goose/goose/pull/12729)
- Avoid duplicate provider initialization for foreground subagents [#12705](https://github.com/aaif-goose/goose/pull/12705)
- Refresh the model catalog on the blocking pool [#12727](https://github.com/aaif-goose/goose/pull/12727)
- Remove false optionality in desktop props [#12776](https://github.com/aaif-goose/goose/pull/12776)
- Delete the legacy agent loop [#12760](https://github.com/aaif-goose/goose/pull/12760)

## 📚 Documentation

- Agentic State Machines [#12130](https://github.com/aaif-goose/goose/pull/12130)

---

> **Source** [aaif-goose/goose](https://github.com/aaif-goose/goose) · `v1.55.0` · 2026-10-16 · [upstream release](https://github.com/aaif-goose/goose/releases/tag/v1.55.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
