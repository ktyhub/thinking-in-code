---
title: "plantuml v1.2026.7"
project: "plantuml"
repo: "plantuml/plantuml"
tag: "v1.2026.7"
published: "2026-08-25"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/plantuml/plantuml/compare/v1.2026.6...v1.2026.7"
---

# plantuml v1.2026.7

## What's Changed
* 🐛 Fix #2277 NPE when using ELK by @travkin79 in https://github.com/plantuml/plantuml/pull/2773
* 🐛 Fix images rendered using Dockerfile being owned by root by @Antipoison7 in https://github.com/plantuml/plantuml/pull/2777
* 🐛 [Smetana] fill arrowheads of filled decorations (>>) by @akaGelo in https://github.com/plantuml/plantuml/pull/2796
* 📝 Add MCP Toplist rank badge by @chrstphe in https://github.com/plantuml/plantuml/pull/2810
* ✨ Implement clock message arrow time projection by @kalayciburak in https://github.com/plantuml/plantuml/pull/2802
* 🐛 fix(js-plantuml): Persist URL sharing across deployments by @toransahu in https://github.com/plantuml/plantuml/pull/2827
* 🐛 fix(js-plantuml): Persist zoom and pan across deployments by @toransahu in https://github.com/plantuml/plantuml/pull/2830
* ✨ feat(js-plantuml): Open diagrams in live SVG and PNG tabs by @toransahu in https://github.com/plantuml/plantuml/pull/2831
* ⬆️ Bump gradle/actions from 6.1.0 to 6.1.1 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2746
* ⬆️ Bump gradle/actions from 6.1.1 to 6.2.0 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2747
* ⬆️ Bump hono from 4.12.23 to 4.12.26 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2751
* ⬆️ Bump actions/checkout from 6 to 7 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2752
* ⬆️ Bump actions/cache from 5 to 6 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2758
* ⬆️ Bump org.junit.platform:junit-platform-launcher from 6.1.0 to 6.1.1 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2768
* ⬆️ Bump junit-jupiter from 6.1.0 to 6.1.1 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2765
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.2 to 1.1.3 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2767
* ⬆️ Bump org.junit.platform:junit-platform-launcher from 6.1.1 to 6.1.2 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2778
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.3 to 1.1.4 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2779
* ⬆️ Bump junit-jupiter from 6.1.1 to 6.1.2 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2780
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.4 to 1.1.5 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2782
* ⬆️ Bump hono from 4.12.26 to 4.12.31 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2792
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.5 to 1.1.6 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2790
* ⬆️ Bump fast-uri from 3.1.2 to 3.1.4 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2793
* ⬆️ Bump ip-address from 10.2.0 to 10.4.0 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2803
* ⬆️ Bump hono from 4.12.31 to 4.13.0 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2806
* ⬆️ Bump fast-uri from 3.1.4 to 3.1.5 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2807
* ⬆️ Bump org.xmlunit:xmlunit-core from 2.12.0 to 2.13.0 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2804
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.6 to 1.1.7 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2811
* ⬆️ Bump gradle/actions/setup-gradle from 6.2.0 to 6.3.0 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2808
* ⬆️ Bump gradle/actions from 6.2.0 to 6.3.0 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2809
* ⬆️ Bump org.sonarqube from 7.3.1.8318 to 7.4.0.8496 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2816
* ⬆️ Bump junit-jupiter from 6.1.2 to 6.1.3 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2817
* ⬆️ Bump org.junit.platform:junit-platform-launcher from 6.1.2 to 6.1.3 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2819
* ⬆️ Bump @hono/node-server from 1.19.14 to 1.19.17 in /plantuml-mcp-js by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2821
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.7 to 1.1.9 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2823
* ⬆️ Bump org.graalvm.buildtools.native from 1.1.9 to 1.1.10 by @dependabot[bot] in https://github.com/plantuml/plantuml/pull/2829

## New Contributors
* @Antipoison7 made their first contribution in https://github.com/plantuml/plantuml/pull/2777
* @akaGelo made their first contribution in https://github.com/plantuml/plantuml/pull/2796
* @chrstphe made their first contribution in https://github.com/plantuml/plantuml/pull/2810

**Full Changelog**: https://github.com/plantuml/plantuml/compare/v1.2026.6...v1.2026.7

---

> **Source** [plantuml/plantuml](https://github.com/plantuml/plantuml) · `v1.2026.7` · 2026-08-25 · [upstream release](https://github.com/plantuml/plantuml/releases/tag/v1.2026.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
