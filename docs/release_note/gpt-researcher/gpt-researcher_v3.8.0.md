---
title: "gpt-researcher v3.8.0"
project: "gpt-researcher"
repo: "assafelovic/gpt-researcher"
tag: "v3.8.0"
published: "2026-11-09"
type: "minor"
lang: "en"
summary: "The Next.js app has a new paper design that matches gptr.dev. Settings live in one modal with tabs for Research, MCP, Documents and Backend;"
---

# gpt-researcher v3.8.0

## A new UI, and detailed reports in under 4 minutes

<a href="https://github.com/user-attachments/assets/4d3f26cf-8ccc-413a-b17c-80aa9e1b52d1">
  <img src="https://github.com/user-attachments/assets/3a56a008-fcbd-4373-9e40-8d6027120cfb" alt="GPT Researcher turning a question into a cited report" width="800">
</a>

The Next.js app has a new paper design that matches [gptr.dev](https://gptr.dev). Settings live in one modal with tabs for Research, MCP, Documents and Backend; a run shows a plain-language feed, and the sources margin slides in once writing starts. The previous UI is still available at `/classic`.

Detailed reports now finish in **3:27 instead of 9:11**. Sections are researched in parallel, and the default writer is now `gpt-6-sol`, which starts writing within seconds instead of reasoning for close to a minute per section first. Measurements and the model comparison are in #2272.

## ⚠️ Changes to note
- **Default writer model:** `SMART_LLM` is now `openai:gpt-6-sol` (was `openai:gpt-5.4`). Set `SMART_LLM` to keep the previous model.
- **LLM idle timeout:** an LLM call that sends nothing for 300 seconds now fails with a clear error instead of hanging the run. Tune it with `LLM_TIMEOUT` (`0` disables it). (#2220)
- **Docker:** the root `.env` is no longer copied into images. `docker compose` loads it at runtime (needs Compose 2.24+); with `docker run`, pass `--env-file .env`. If you ever pushed an image you built locally, rotate the keys that were in your `.env`.
- `generate_report` now raises when every LLM attempt fails, instead of returning an empty report. (#2219)

## Also in this release
- **Prebuilt Docker images** for `linux/amd64` and `linux/arm64` on GHCR: `ghcr.io/assafelovic/gpt-researcher` and `ghcr.io/assafelovic/gpt-researcher-frontend-nextjs`, tagged with the version and `latest` (#1517)
- **Research observer:** an optional lifecycle observer for integrations that want structured progress events (#2232)
- **MiniMax** regional providers and Flash defaults (#1924), a configurable TypeSafe base URL (#2243), and **Deploy on Render** with a `render.yaml` blueprint (#2184)
- Multi-agent plan review feedback from the web UI works again, and the multi-agent writer uses `SMART_TOKEN_LIMIT` and `REASONING_EFFORT` (#2272)
- Deep research honors reasoning budgets, counts retries and nested researchers in costs, and keeps cited learnings at the word limit (#2260, #2209, #2208)
- MCP search no longer blocks the event loop, and the `max_tools` cap is enforced (#2262, #2263)
- Configuration: `reasoning_effort` from JSON config files, `DOC_PATH` / `REPORT_SOURCE` env overrides, UTF-8 config files, and image generation settings are all honored again (#2230, #2248, #2249, #2199, #2246)
- Retriever, scraper and document loader fixes across Exa, Google, Bing, Bocha, PubMed Central, arXiv, online documents and Windows text files
- Retriever plugins: a community list with Keenable and Sciverse (#2176, #2225)

53 community pull requests went into this release. Thank you to everyone who contributed.

**Install:** `pip install -U gpt-researcher` (0.17.0)

## What's Changed
* fix(readme): point star history chart back to official star-history.com by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2204
* docs: drop STORM references and describe current research approach by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2205
* fix(config): preserve loaded MCP settings by @imharjot in https://github.com/assafelovic/gpt-researcher/pull/2193
* fix(config): stop sharing mutable defaults between Config instances by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2206
* fix(ci): cap pytest below 9.2 so --forked tests stop crashing by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2269
* docs: use a single black tile logo in the READMEs by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2270
* New paper UI, and detailed reports in 3:27 instead of 9:11 by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2272
* docs(readme): show only the demo GIF by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2273
* Release 0.17.0: 53 community fixes, Docker secrets fix, GHCR multi-arch images by @assafelovic in https://github.com/assafelovic/gpt-researcher/pull/2274
* fix(report): raise error and log failure when generate_report LLM calls fail by @pei711 in https://github.com/assafelovic/gpt-researcher/pull/2219
* docs: add Sciverse to community retriever plugins by @gary-Shen in https://github.com/assafelovic/gpt-researcher/pull/2225
* fix(config): honor reasoning effort from JSON configuration by @yunyv in https://github.com/assafelovic/gpt-researcher/pull/2230
* feat: add an optional research lifecycle observer by @EvanZhao119 in https://github.com/assafelovic/gpt-researcher/pull/2232
* docs: fix links broken by the deep_agents branch split and two upstream migrations by @SoulmatelynchVFX in https://github.com/assafelovic/gpt-researcher/pull/2236
* fix(deep-research): validate follow-up question shapes before iteration by @WitBlue6 in https://github.com/assafelovic/gpt-researcher/pull/2238
* (feat) Custom typesafe base url by @eriktews in https://github.com/assafelovic/gpt-researcher/pull/2243
* fix: image generation config read with wrong (uppercase) attribute names - feature unreachable by @Akaliup in https://github.com/assafelovic/gpt-researcher/pull/2246
* fix: DOC_PATH and REPORT_SOURCE env overrides ignored by doc path setup by @Akaliup in https://github.com/assafelovic/gpt-researcher/pull/2248
* fix(config): read JSON configuration files as UTF-8 by @DZH166 in https://github.com/assafelovic/gpt-researcher/pull/2249
* fix(document): detect online document type from URL path by @Elon-Jiang in https://github.com/assafelovic/gpt-researcher/pull/2252
* fix(scraper): select the arXiv backend by URL hostname by @DZH166 in https://github.com/assafelovic/gpt-researcher/pull/2254
* fix(markdown): decode HTML entities in extracted section text by @DZH166 in https://github.com/assafelovic/gpt-researcher/pull/2255
* Preserve configuration and document inputs in detailed subtopic reports by @yunyv in https://github.com/assafelovic/gpt-researcher/pull/2256
* docs(mcp): fix broken links in Claude integration documentation by @pei711 in https://github.com/assafelovic/gpt-researcher/pull/2258
* fix(deep-research): honor reasoning budgets and track retry costs by @SJ-Xia-Q in https://github.com/assafelovic/gpt-researcher/pull/2260
* Clear stale sources after empty deep research runs by @Quinnod345 in https://github.com/assafelovic/gpt-researcher/pull/2261
* fix(research): run the blocking MCP retriever search off the event loop by @DZH166 in https://github.com/assafelovic/gpt-researcher/pull/2262
* fix(mcp): enforce the max_tools cap when the LLM picks MCP tools by @DZH166 in https://github.com/assafelovic/gpt-researcher/pull/2263
* fix(cost): update_cost uses raw unsanitized token counts inconsistent with calculate_cost by @Cmz9111 in https://github.com/assafelovic/gpt-researcher/pull/2264
* fix(scraper): get_image_hash returns None on error despite str return type annotation by @Cmz9111 in https://github.com/assafelovic/gpt-researcher/pull/2265
* fix(costs): guard estimate_embedding_cost against None and non-str inputs by @pei711 in https://github.com/assafelovic/gpt-researcher/pull/2266
* fix(bocha): implement get_api_key error handling and add unit tests by @pei711 in https://github.com/assafelovic/gpt-researcher/pull/2267
* fix(bing): apply query_domains and harden payload parsing in BingSearch by @pei711 in https://github.com/assafelovic/gpt-researcher/pull/2268
* feat: update MiniMax regional providers and Flash defaults by @octo-patch in https://github.com/assafelovic/gpt-researcher/pull/1924
* fix(multi_agents): treat an empty console plan reply as approval, as the web form does by @hesam-shams in https://github.com/assafelovic/gpt-researcher/pull/2164
* fix: revalidate PyMuPDFScraper retry output against content-quality checks by @MrSampson in https://github.com/assafelovic/gpt-researcher/pull/2167
* fix: ReportGenerator.write_report() must read researcher.websocket live by @MrSampson in https://github.com/assafelovic/gpt-researcher/pull/2169
* docs: add a community plugins list to Retriever Plugins by @ilya-bogin-keenable in https://github.com/assafelovic/gpt-researcher/pull/2176
* fix(exa): harden find_similar and get_contents against client failures by @RerankerGuo in https://github.com/assafelovic/gpt-researcher/pull/2181
* fix(document): harden LangChainDocumentLoader.load against malformed rows by @RerankerGuo in https://github.com/assafelovic/gpt-researcher/pull/2183
* feat: add Deploy on Render page and render.yaml by @Ho1yShif in https://github.com/assafelovic/gpt-researcher/pull/2184
* docs: document generic MCP connection headers and fix Quick Start syntax by @ct-jaryn in https://github.com/assafelovic/gpt-researcher/pull/2185
* chore(deps): update numpy requirement from <2.5.0,>=2.0.0 to >=2.0.0,<2.6.0 by @dependabot[bot] in https://github.com/assafelovic/gpt-researcher/pull/2187
* test: stop tests leaking sys.modules stubs; run CI suite without --forked by @Saadanjum0 in https://github.com/assafelovic/gpt-researcher/pull/2189
* fix: resolve PubMed IDs before fetching PMC full text by @GoldArowana in https://github.com/assafelovic/gpt-researcher/pull/2195
* fix(images): read image_generation_* config keys in the case Config stores them by @Winoren in https://github.com/assafelovic/gpt-researcher/pull/2199
* fix(document): keep OnlineDocumentLoader url a string when metadata omits source by @Winoren in https://github.com/assafelovic/gpt-researcher/pull/2200
* docs: fix broken README language and evals links by @pratikgx in https://github.com/assafelovic/gpt-researcher/pull/2201
* fix(deep-research): keep cited learnings when the context reaches the word limit by @porkedchop in https://github.com/assafelovic/gpt-researcher/pull/2208
* fix(deep-research): count strategic LLM calls and nested researchers in costs by @porkedchop in https://github.com/assafelovic/gpt-researcher/pull/2209
* fix(scraper): treat the "Client Challenge" interstitial as a block page by @yail259 in https://github.com/assafelovic/gpt-researcher/pull/2213
* fix(google): match YouTube exclusions by hostname by @sanjayrohith in https://github.com/assafelovic/gpt-researcher/pull/2215
* fix: replace retired Google and Anthropic model defaults by @pcbeingused333 in https://github.com/assafelovic/gpt-researcher/pull/2216
* fix: don't send temperature to Claude models that reject it by @pcbeingused333 in https://github.com/assafelovic/gpt-researcher/pull/2217
* fix(llm): bound stalled responses with configurable idle timeouts by @Xiaoshaoxinxing in https://github.com/assafelovic/gpt-researcher/pull/2220
* docs: sync Chinese README (README-zh_CN.md) with the English README by @yuee3 in https://github.com/assafelovic/gpt-researcher/pull/2222
* fix(pubmed_central): keep words whole at inline markup and put each block on its own line by @L4XB in https://github.com/assafelovic/gpt-researcher/pull/2224
* fix(scraper): retry HTTP 403 with a transparent user agent by @EvanZhao119 in https://github.com/assafelovic/gpt-researcher/pull/2231
* fix(document): load UTF-8 .txt and .html documents on Windows by @tanishqbaweja in https://github.com/assafelovic/gpt-researcher/pull/2237
* fix(prompts): preserve config in invalid prompt family fallback by @jixuantang in https://github.com/assafelovic/gpt-researcher/pull/2245
* fix(vector-store): skip empty chunk batches by @Elon-Jiang in https://github.com/assafelovic/gpt-researcher/pull/2250

## New Contributors
* @imharjot made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2193
* @pei711 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2219
* @gary-Shen made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2225
* @yunyv made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2230
* @EvanZhao119 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2232
* @SoulmatelynchVFX made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2236
* @WitBlue6 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2238
* @eriktews made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2243
* @Akaliup made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2246
* @DZH166 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2249
* @Elon-Jiang made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2252
* @SJ-Xia-Q made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2260
* @Quinnod345 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2261
* @Cmz9111 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2264
* @hesam-shams made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2164
* @MrSampson made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2167
* @ilya-bogin-keenable made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2176
* @RerankerGuo made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2181
* @Ho1yShif made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2184
* @ct-jaryn made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2185
* @Saadanjum0 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2189
* @GoldArowana made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2195
* @Winoren made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2199
* @pratikgx made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2201
* @porkedchop made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2208
* @yail259 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2213
* @sanjayrohith made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2215
* @pcbeingused333 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2216
* @Xiaoshaoxinxing made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2220
* @yuee3 made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2222
* @tanishqbaweja made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2237
* @jixuantang made their first contribution in https://github.com/assafelovic/gpt-researcher/pull/2245

**Full Changelog**: https://github.com/assafelovic/gpt-researcher/compare/v3.7.0...v3.8.0

---

> **Source** [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) · `v3.8.0` · 2026-11-09 · [upstream release](https://github.com/assafelovic/gpt-researcher/releases/tag/v3.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
