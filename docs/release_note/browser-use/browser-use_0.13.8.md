---
title: "browser-use 0.13.8"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.8"
version: "0.13.8"
published: "2026-08-16"
type: "patch"
lang: "en"
summary: "Update Cerebras model IDs and default · Recover Anthropic tool arguments when the model serializes its call as text · docs: replace broken profile sync link · fix(agent): guard last_action() against empty action list"
---

# browser-use 0.13.8

## What's Changed
* Update Cerebras model IDs and default by @ryanl-cerebras in https://github.com/browser-use/browser-use/pull/5323
* Recover Anthropic tool arguments when the model serializes its call as text by @ElayGelbart in https://github.com/browser-use/browser-use/pull/5330
* docs: replace broken profile sync link by @Hardik180704 in https://github.com/browser-use/browser-use/pull/5332
* fix(agent): guard last_action() against empty action list by @itxaiohanglover in https://github.com/browser-use/browser-use/pull/5103
* fix(agent): guard _inject_budget_warning against ZeroDivisionError by @itxaiohanglover in https://github.com/browser-use/browser-use/pull/5107
* fix(browser): return Path from validate_user_data_dir when creating temp dir by @itxaiohanglover in https://github.com/browser-use/browser-use/pull/5114
* Use UTF-8 for agent file writes by @Ghraven in https://github.com/browser-use/browser-use/pull/5309
* fix(dom): clamp final chunk char_end to len(content) for trailing newline by @Diwak4r in https://github.com/browser-use/browser-use/pull/5175
* fix(registry): do not expose domain-restricted actions on an empty URL by @abhay-codes07 in https://github.com/browser-use/browser-use/pull/5204
* fix(agent): give each MessageManager its own state (mutable default arg) by @abhay-codes07 in https://github.com/browser-use/browser-use/pull/5205
* fix(dom): fix stackingContexts access type mismatch by @itxaiohanglover in https://github.com/browser-use/browser-use/pull/5104
* fix: export documented LLM chat models by @Karunasagar12 in https://github.com/browser-use/browser-use/pull/5182
* Fix variable shadowing in Element.click() error handling by @Gaurav0807 in https://github.com/browser-use/browser-use/pull/5089
* fix(downloads): fire complete callbacks for remote-browser downloads by @sergioperezcheco in https://github.com/browser-use/browser-use/pull/5264
* fix(llm): read structured output from tool calls for Groq tool-calling models by @VenkateswarluNagineni in https://github.com/browser-use/browser-use/pull/5240
* Fix ChatAnthropicBedrock.ainvoke() IndexError on an empty response.content list by @chuenchen309 in https://github.com/browser-use/browser-use/pull/5233
* fix(async): avoid re-raising task callback errors by @GautamSharma99 in https://github.com/browser-use/browser-use/pull/5285
* fix(browser): apply storage_state cookies when passed as an in-memory dict by @ayaangazali in https://github.com/browser-use/browser-use/pull/5262
* fix(tools): restore SearchGoogleAction back-compat alias by @LHMQ878 in https://github.com/browser-use/browser-use/pull/5318
* Fix Mouse.scroll() silently redirecting an explicit x=0/y=0 to viewport center by @chuenchen309 in https://github.com/browser-use/browser-use/pull/5231
* Fix DOMTreeSerializer leaking paint-order-occluded text to the LLM by @chuenchen309 in https://github.com/browser-use/browser-use/pull/5225
* fix(mcp): mark read-only MCP tools with readOnlyHint annotations by @ayaangazali in https://github.com/browser-use/browser-use/pull/5246
* fix(mcp): surface CallToolResult.isError as a failed ActionResult by @chuenchen309 in https://github.com/browser-use/browser-use/pull/5235
* fix(agent): close PIL images after GIF creation to prevent resource leak by @itxaiohanglover in https://github.com/browser-use/browser-use/pull/5105
* fix: include exception details in coordinate click and add missing error logs by @shotsan in https://github.com/browser-use/browser-use/pull/5379
* docs: refresh the Open Source vs Cloud plot with Cloud v4 by @Alezander9 in https://github.com/browser-use/browser-use/pull/5388
* docs: show the hosted agent API call in the README by @Alezander9 in https://github.com/browser-use/browser-use/pull/5394
* fix(utils): prevent redact_sensitive_string cascade corruption by @santhreal in https://github.com/browser-use/browser-use/pull/5211
* Bump aiohttp and pypdf security pins by @sauravpanda in https://github.com/browser-use/browser-use/pull/5326
* fix(agent): honor zero message compaction threshold by @wesleyzhangwq in https://github.com/browser-use/browser-use/pull/5401
* fix(mcp): update deprecated Bedrock Claude model identifier by @scemii in https://github.com/browser-use/browser-use/pull/5448
* docs: trim README demo videos by @MagMueller in https://github.com/browser-use/browser-use/pull/5463
* docs: restore social video preview by @MagMueller in https://github.com/browser-use/browser-use/pull/5464
* feat(llm): default ChatBrowserUse to bu-2-0-mini-preview by @sauravpanda in https://github.com/browser-use/browser-use/pull/5465
* fix(deps): unblock OpenHands with rich 14.3.3 by @MagMueller in https://github.com/browser-use/browser-use/pull/5477
* feat: add first-party OpenClaw skill support by @MagMueller in https://github.com/browser-use/browser-use/pull/5476
* Release 0.13.8 with Browser Harness 0.1.9 by @gregpr07 in https://github.com/browser-use/browser-use/pull/5481

## New Contributors
* @ryanl-cerebras made their first contribution in https://github.com/browser-use/browser-use/pull/5323
* @ElayGelbart made their first contribution in https://github.com/browser-use/browser-use/pull/5330
* @Hardik180704 made their first contribution in https://github.com/browser-use/browser-use/pull/5332
* @itxaiohanglover made their first contribution in https://github.com/browser-use/browser-use/pull/5103
* @Ghraven made their first contribution in https://github.com/browser-use/browser-use/pull/5309
* @Diwak4r made their first contribution in https://github.com/browser-use/browser-use/pull/5175
* @abhay-codes07 made their first contribution in https://github.com/browser-use/browser-use/pull/5204
* @Karunasagar12 made their first contribution in https://github.com/browser-use/browser-use/pull/5182
* @Gaurav0807 made their first contribution in https://github.com/browser-use/browser-use/pull/5089
* @sergioperezcheco made their first contribution in https://github.com/browser-use/browser-use/pull/5264
* @VenkateswarluNagineni made their first contribution in https://github.com/browser-use/browser-use/pull/5240
* @chuenchen309 made their first contribution in https://github.com/browser-use/browser-use/pull/5233
* @GautamSharma99 made their first contribution in https://github.com/browser-use/browser-use/pull/5285
* @ayaangazali made their first contribution in https://github.com/browser-use/browser-use/pull/5262
* @LHMQ878 made their first contribution in https://github.com/browser-use/browser-use/pull/5318
* @shotsan made their first contribution in https://github.com/browser-use/browser-use/pull/5379
* @santhreal made their first contribution in https://github.com/browser-use/browser-use/pull/5211
* @wesleyzhangwq made their first contribution in https://github.com/browser-use/browser-use/pull/5401
* @scemii made their first contribution in https://github.com/browser-use/browser-use/pull/5448

**Full Changelog**: https://github.com/browser-use/browser-use/compare/0.13.7...0.13.8

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.8` · 2026-08-16 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
