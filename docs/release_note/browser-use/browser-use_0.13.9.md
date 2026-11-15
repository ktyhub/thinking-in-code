---
title: "browser-use 0.13.9"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "0.13.9"
version: "0.13.9"
published: "2026-09-04"
type: "patch"
lang: "en"
summary: "fix(llm): make bu-2-0 the ChatBrowserUse default again, keep mini opt-in · ci: remove the dead cloud_evals image-build trigger · fix(filesystem): report missing target text in replace_file"
---

# browser-use 0.13.9

## What's Changed
* fix(llm): make bu-2-0 the ChatBrowserUse default again, keep mini opt-in by @sauravpanda in https://github.com/browser-use/browser-use/pull/5488
* ci: remove the dead cloud_evals image-build trigger by @sauravpanda in https://github.com/browser-use/browser-use/pull/5491
* fix(filesystem): report missing target text in replace_file by @uczltw6 in https://github.com/browser-use/browser-use/pull/5498
* fix(filesystem): escape plain text in generated PDFs by @primorLee in https://github.com/browser-use/browser-use/pull/5502
* docs: highlight rerunnable Cloud scripts by @MagMueller in https://github.com/browser-use/browser-use/pull/5551
* docs(cloud): update tools guide for CLI 3.0 by @MagMueller in https://github.com/browser-use/browser-use/pull/5553
* fix(deps): bump dependency versions by @sauravpanda in https://github.com/browser-use/browser-use/pull/5382
* fix: Update DeepSeek default model to deepseek-v4-flash by @DipsyHou in https://github.com/browser-use/browser-use/pull/5563
* fix(llm): stop putting format/stream inside Ollama options by @official-burak in https://github.com/browser-use/browser-use/pull/5561
* fix(deps): update vulnerable Click, MCP, and pypdf pins by @green3sf in https://github.com/browser-use/browser-use/pull/5526
* fix(browser): clear cookies via Storage domain, not Network by @MrLeit in https://github.com/browser-use/browser-use/pull/5562
* fix(filesystem): render markdown emphasis in PDF export by @leilei3167 in https://github.com/browser-use/browser-use/pull/5540
* fix(llm): ignore empty reasoning model patterns by @ECD5A in https://github.com/browser-use/browser-use/pull/5545
* fix(dom): expose image context for clickable elements by @UniversePeak in https://github.com/browser-use/browser-use/pull/5541
* build: require Browser Harness 0.1.10 by @MagMueller in https://github.com/browser-use/browser-use/pull/5507
* fix(registry): replace sensitive placeholders inside tuple params by @LambIessz in https://github.com/browser-use/browser-use/pull/5570
* Fix WebSocket drops during reconnect window by @Soundcreates in https://github.com/browser-use/browser-use/pull/5373
* docs(cloud): replace retired V1 API examples with V4 by @MagMueller in https://github.com/browser-use/browser-use/pull/5578
* Upgrade datamodel-code-generator to 0.75.1 by @sauravpanda in https://github.com/browser-use/browser-use/pull/5588
* fix: keep balanced trailing brackets in URLs extracted from task text by @aniketwaghh in https://github.com/browser-use/browser-use/pull/5576
* docs: migrate remote browser skill to CLI 3.0 by @MagMueller in https://github.com/browser-use/browser-use/pull/5583
* fix: allow pydantic 2.13 by @MagMueller in https://github.com/browser-use/browser-use/pull/5577
* docs: correct Cloud signup credit by @MagMueller in https://github.com/browser-use/browser-use/pull/5602
* fix(browser): honor BROWSER_USE_HEADLESS in BrowserProfile (#5420) by @jiffyaneesh in https://github.com/browser-use/browser-use/pull/5475
* fix(llm/google): keep the first user message when include_system_in_user is set by @aniketwaghh in https://github.com/browser-use/browser-use/pull/5597
* docs: correct cloud browser session price by @MagMueller in https://github.com/browser-use/browser-use/pull/5601
* docs(cloud): add API v4 skill reference by @MagMueller in https://github.com/browser-use/browser-use/pull/5591
* fix(llm): preserve schema-keyword field names by @MagMueller in https://github.com/browser-use/browser-use/pull/5605
* fix(llm): preserve zero max_retries for Anthropic Bedrock by @cosin2077 in https://github.com/browser-use/browser-use/pull/5348
* fix(agent): match URL negations as whole words by @JayLay0310 in https://github.com/browser-use/browser-use/pull/5493
* fix(agent): preserve downloaded file path order by @oysz in https://github.com/browser-use/browser-use/pull/5453
* fix(browser): read persisted storage state as UTF-8 by @r266-tech in https://github.com/browser-use/browser-use/pull/5359
* fix(browser): preserve default Chrome arg order by @MagMueller in https://github.com/browser-use/browser-use/pull/5621
* Add OrcaRouter as a named LLM provider by @XiaoHuo888-hue in https://github.com/browser-use/browser-use/pull/5451
* fix(openrouter): validate client and response inputs by @MagMueller in https://github.com/browser-use/browser-use/pull/5599
* Show the live value of pre-filled inputs to the agent by @MagMueller in https://github.com/browser-use/browser-use/pull/5650
* fix(tools): report failed tab switches as errors instead of silent success by @Faseeh06 in https://github.com/browser-use/browser-use/pull/5500
* fix(browser): support literal plus in send_keys by @IENVYshanks in https://github.com/browser-use/browser-use/pull/5582
* fix(dom): expose image context for directly clickable images by @r266-tech in https://github.com/browser-use/browser-use/pull/5586
* fix: detect browser process exit early in _wait_for_cdp_url by @octo-patch in https://github.com/browser-use/browser-use/pull/4599
* fix(browser): restore session handlers after event bus reset by @lisa0314 in https://github.com/browser-use/browser-use/pull/5230
* chore: release 0.13.9 with Browser Harness 0.1.12 by @MagMueller in https://github.com/browser-use/browser-use/pull/5666

## New Contributors
* @uczltw6 made their first contribution in https://github.com/browser-use/browser-use/pull/5498
* @primorLee made their first contribution in https://github.com/browser-use/browser-use/pull/5502
* @DipsyHou made their first contribution in https://github.com/browser-use/browser-use/pull/5563
* @official-burak made their first contribution in https://github.com/browser-use/browser-use/pull/5561
* @green3sf made their first contribution in https://github.com/browser-use/browser-use/pull/5526
* @MrLeit made their first contribution in https://github.com/browser-use/browser-use/pull/5562
* @leilei3167 made their first contribution in https://github.com/browser-use/browser-use/pull/5540
* @ECD5A made their first contribution in https://github.com/browser-use/browser-use/pull/5545
* @UniversePeak made their first contribution in https://github.com/browser-use/browser-use/pull/5541
* @LambIessz made their first contribution in https://github.com/browser-use/browser-use/pull/5570
* @Soundcreates made their first contribution in https://github.com/browser-use/browser-use/pull/5373
* @aniketwaghh made their first contribution in https://github.com/browser-use/browser-use/pull/5576
* @jiffyaneesh made their first contribution in https://github.com/browser-use/browser-use/pull/5475
* @cosin2077 made their first contribution in https://github.com/browser-use/browser-use/pull/5348
* @JayLay0310 made their first contribution in https://github.com/browser-use/browser-use/pull/5493
* @oysz made their first contribution in https://github.com/browser-use/browser-use/pull/5453
* @XiaoHuo888-hue made their first contribution in https://github.com/browser-use/browser-use/pull/5451
* @Faseeh06 made their first contribution in https://github.com/browser-use/browser-use/pull/5500
* @IENVYshanks made their first contribution in https://github.com/browser-use/browser-use/pull/5582
* @octo-patch made their first contribution in https://github.com/browser-use/browser-use/pull/4599
* @lisa0314 made their first contribution in https://github.com/browser-use/browser-use/pull/5230

**Full Changelog**: https://github.com/browser-use/browser-use/compare/0.13.8...0.13.9

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `0.13.9` · 2026-09-04 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/0.13.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
