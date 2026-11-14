---
title: "DocsGPT 1.1.0"
project: "DocsGPT"
repo: "arc53/DocsGPT"
tag: "1.1.0"
version: "1.1.0"
published: "2026-10-25"
type: "minor"
lang: "en"
---

# DocsGPT 1.1.0

## What's Changed
* Keep the Responses prompt cache across turns and count replayed reasoning by @dartpain in https://github.com/arc53/DocsGPT/pull/3033
* docs: add Vercel OSS Program badge to README by @dartpain in https://github.com/arc53/DocsGPT/pull/3049
* Update the README translations by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3050
* docs: supporters row in README header by @dartpain in https://github.com/arc53/DocsGPT/pull/3052
* Update the README translations by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3053
* docs: Neon dark logo on dark theme by @dartpain in https://github.com/arc53/DocsGPT/pull/3054
* Update the README translations by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3057
* Richer Word artifacts, artifact downloads for API clients, and reference-only attachments by @dartpain in https://github.com/arc53/DocsGPT/pull/3060
* Report the prompt cache in /v1 usage by @dartpain in https://github.com/arc53/DocsGPT/pull/3064
* Keep a paused turn's attachments and state when it resumes by @dartpain in https://github.com/arc53/DocsGPT/pull/3063
* Triage: answer mentions, honour form claims, quieter PR re-reviews by @dartpain in https://github.com/arc53/DocsGPT/pull/3075
* Let scheduled and webhook agent runs use the code executor by @dartpain in https://github.com/arc53/DocsGPT/pull/3081
* (fix)drawio: preset connector flow by @ManishMadan2882 in https://github.com/arc53/DocsGPT/pull/3073
* chore(deps): bump the frontend group in /frontend with 8 updates by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/3042
* feat: CoinGecko MCP connector preset by @nabeel001 in https://github.com/arc53/DocsGPT/pull/3079
* Google Drive: pick folders and shared drives, harden the folder download by @dartpain in https://github.com/arc53/DocsGPT/pull/3087
* feat(connectors): add Alpha Vantage MCP connector preset by @Asymtode712 in https://github.com/arc53/DocsGPT/pull/3039
* fix(crawler): stay on the start host when following links by @prakashNalla in https://github.com/arc53/DocsGPT/pull/3012
* fix(connectors): stop the MCP OAuth wait when the user cancels sign-in by @Asymtode712 in https://github.com/arc53/DocsGPT/pull/3055
* fix(k8s): preserve public API URL on workers by @darshan-shanthveer-patil in https://github.com/arc53/DocsGPT/pull/3070
* fix(mcp): tolerate empty input schemas by @nikhiljangid120 in https://github.com/arc53/DocsGPT/pull/3000
* fix: bound embedding chunk inputs by @rohanmalhotracodes in https://github.com/arc53/DocsGPT/pull/3009
* Activity tab by @pabik in https://github.com/arc53/DocsGPT/pull/3091
* Show user emails in the admin console by @dartpain in https://github.com/arc53/DocsGPT/pull/3093
* fix(parser): correct RST header detection and preamble handling by @chukka-venugopalam in https://github.com/arc53/DocsGPT/pull/2893
* Add artifact cards to chat and previews; mobile workflow page by @pabik in https://github.com/arc53/DocsGPT/pull/3095
* Localisations cleanup by @pabik in https://github.com/arc53/DocsGPT/pull/3096
* Add the decision harness: docsgpt.decisions, decider sidecar, API mode, injection check, off by default by @dartpain in https://github.com/arc53/DocsGPT/pull/3092
* Notification handling by @pabik in https://github.com/arc53/DocsGPT/pull/3100
* docs: add anonymous Parallel Search MCP setup example by @georgeatparallel in https://github.com/arc53/DocsGPT/pull/2728
* Model-scored relevance in retrieval: rerank stage and decision prescreen, off by default by @dartpain in https://github.com/arc53/DocsGPT/pull/3097
* fix(parser): bound nested sitemap recursion in SitemapLoader (#3036) by @INEcodes in https://github.com/arc53/DocsGPT/pull/3038
* Decisions: model-based prompt-injection scanning (issue 003) by @dartpain in https://github.com/arc53/DocsGPT/pull/3117
* Passthrough values in the widget, conversations and Logs by @dartpain in https://github.com/arc53/DocsGPT/pull/3116
* chore: bump npm libraries to v0.9.0 by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/2984
* chore: bump npm libraries to v0.10.0 by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3119
* Mark as safe: never return an exception's text by @dartpain in https://github.com/arc53/DocsGPT/pull/3118
* Docs: use widget 0.10.0 by @dartpain in https://github.com/arc53/DocsGPT/pull/3120
* feat(upload): allow uploading a folder (#1771) by @Sarcastic-Soul in https://github.com/arc53/DocsGPT/pull/3037
* fix(tools): stop the API action editor from dropping typed characters by @dartpain in https://github.com/arc53/DocsGPT/pull/3123
* feat(celery): route whole-source jobs to an ingest queue by @dartpain in https://github.com/arc53/DocsGPT/pull/3124
* fix(parser): stop RST chunk_by_token_count from dropping text by @CephasCoots-12 in https://github.com/arc53/DocsGPT/pull/3074
* fix(parser): keep numbers and layout in RST cleanup by @sonu7089 in https://github.com/arc53/DocsGPT/pull/3090
* fix(parser): treat scalar JSON documents as one row by @Ritwik-Mallavarapu in https://github.com/arc53/DocsGPT/pull/3086
* fix: Stop cancels background jobs, keep non-Latin filenames, stream continuation turns by @dartpain in https://github.com/arc53/DocsGPT/pull/3128
* fix: guard against empty/filtered LLM responses in OpenAI adapter by @qizwiz in https://github.com/arc53/DocsGPT/pull/2481
* feat(widget): suggested questions under the welcome card by @dartpain in https://github.com/arc53/DocsGPT/pull/3135
* Docs: 0.11.0 is the current widget release by @dartpain in https://github.com/arc53/DocsGPT/pull/3137
* chore: bump npm libraries to v0.11.0 by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3136
* Decisions: conversation analytics and a docs-gap report by @dartpain in https://github.com/arc53/DocsGPT/pull/3121
* feat(widget): translated UI, JavaScript API, conversation history and sidebar layout by @dartpain in https://github.com/arc53/DocsGPT/pull/3139
* Docs: 0.12.0 is the current widget release by @dartpain in https://github.com/arc53/DocsGPT/pull/3142
* chore: bump npm libraries to v0.12.0 by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3141
* feat(connectors): add Neon MCP connector preset by @SUJALSPATEL in https://github.com/arc53/DocsGPT/pull/3056
* fix(decisions): torch backend KV crop on transformers 5.20, and backfill dry run counting against the server's model by @dartpain in https://github.com/arc53/DocsGPT/pull/3146
* feat(connectors): add Context7 MCP preset by @qiyuhuating in https://github.com/arc53/DocsGPT/pull/3059
* Add Airtable MCP connector preset by @Inbakumar17 in https://github.com/arc53/DocsGPT/pull/2950
* chore(deps): bump pypdf, certifi and sandbox Pillow; drop PyPDF2 by @dartpain in https://github.com/arc53/DocsGPT/pull/3150
* Link revamp by @pabik in https://github.com/arc53/DocsGPT/pull/3149
* chore: bump npm libraries to v0.13.0 by @github-actions[bot] in https://github.com/arc53/DocsGPT/pull/3153
* Docs: 0.13.0 is the current widget release by @arc53-machine in https://github.com/arc53/DocsGPT/pull/3154
* feat(connectors): link Drive, SharePoint and Confluence citations to the original file by @dartpain in https://github.com/arc53/DocsGPT/pull/3155
* fix(agents): tell the model a scheduled run is the schedule firing by @dartpain in https://github.com/arc53/DocsGPT/pull/3158
* fix(events): keep the notification stream alive after long outages by @dartpain in https://github.com/arc53/DocsGPT/pull/3157
* feat(parser): add token overlap to recursive chunker (#2500) by @abhay-2108 in https://github.com/arc53/DocsGPT/pull/2919
* Website ingest by @pabik in https://github.com/arc53/DocsGPT/pull/3156
* fix(parser): strip only real HTML tags and comments in MarkdownParser by @Anandb71 in https://github.com/arc53/DocsGPT/pull/3115
* UI fixes: page menus at the end of the row, Insights counts charts by @pabik in https://github.com/arc53/DocsGPT/pull/3172
* fix(parser): ignore # lines inside fenced code blocks in MarkdownParser by @Anandb71 in https://github.com/arc53/DocsGPT/pull/3114
* Google Drive: ask for picked files only (drive.file), read folders through a service account by @dartpain in https://github.com/arc53/DocsGPT/pull/3169
* The Context limit feature by @pabik in https://github.com/arc53/DocsGPT/pull/3175
* Reingest re-embeds only what changed; manage_source_files sync replaces a source's files in place by @dartpain in https://github.com/arc53/DocsGPT/pull/3170
* Triage agent: sync its sources in place (docsgpt-cli v1.11.0 --sync) by @dartpain in https://github.com/arc53/DocsGPT/pull/3181
* chore: 1.1.0 by @dartpain in https://github.com/arc53/DocsGPT/pull/3182

## New Contributors
* @nabeel001 made their first contribution in https://github.com/arc53/DocsGPT/pull/3079
* @Asymtode712 made their first contribution in https://github.com/arc53/DocsGPT/pull/3039
* @darshan-shanthveer-patil made their first contribution in https://github.com/arc53/DocsGPT/pull/3070
* @nikhiljangid120 made their first contribution in https://github.com/arc53/DocsGPT/pull/3000
* @rohanmalhotracodes made their first contribution in https://github.com/arc53/DocsGPT/pull/3009
* @chukka-venugopalam made their first contribution in https://github.com/arc53/DocsGPT/pull/2893
* @georgeatparallel made their first contribution in https://github.com/arc53/DocsGPT/pull/2728
* @INEcodes made their first contribution in https://github.com/arc53/DocsGPT/pull/3038
* @Sarcastic-Soul made their first contribution in https://github.com/arc53/DocsGPT/pull/3037
* @CephasCoots-12 made their first contribution in https://github.com/arc53/DocsGPT/pull/3074
* @sonu7089 made their first contribution in https://github.com/arc53/DocsGPT/pull/3090
* @Ritwik-Mallavarapu made their first contribution in https://github.com/arc53/DocsGPT/pull/3086
* @qizwiz made their first contribution in https://github.com/arc53/DocsGPT/pull/2481
* @SUJALSPATEL made their first contribution in https://github.com/arc53/DocsGPT/pull/3056
* @qiyuhuating made their first contribution in https://github.com/arc53/DocsGPT/pull/3059
* @abhay-2108 made their first contribution in https://github.com/arc53/DocsGPT/pull/2919
* @Anandb71 made their first contribution in https://github.com/arc53/DocsGPT/pull/3115

**Full Changelog**: https://github.com/arc53/DocsGPT/compare/1.0.0...1.1.0

---

> **Source** [arc53/DocsGPT](https://github.com/arc53/DocsGPT) · `1.1.0` · 2026-10-25 · [upstream release](https://github.com/arc53/DocsGPT/releases/tag/1.1.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
