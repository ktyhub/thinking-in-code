---
title: "DocsGPT 0.17.0"
project: "DocsGPT"
repo: "arc53/DocsGPT"
tag: "0.17.0"
version: "0.17.0"
published: "2026-04-21"
type: "minor"
lang: "en"
summary: "User data now lives in Postgres. Existing 0.16.x deployments must complete the Postgres Migration before upgrading - do not docker compose pull first."
---

# DocsGPT 0.17.0

User data now lives in Postgres. Existing 0.16.x deployments must complete the [Postgres Migration](https://docs.docsgpt.cloud/Deploying/Postgres-Migration) before upgrading - do not docker compose pull first.

## What's Changed
* Add INCIDENT_RESPONSE.md and reference it from SECURITY.md by @dartpain in https://github.com/arc53/DocsGPT/pull/2379
* chore(deps-dev): bump flatted from 3.4.1 to 3.4.2 in /frontend in the npm_and_yarn group across 1 directory by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2319
* Add GitHub Actions zizmor security workflow by @dartpain in https://github.com/arc53/DocsGPT/pull/2383
* chore(deps): bump jsonpointer from 3.0.0 to 3.1.1 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2363
* chore(deps): bump langsmith from 0.7.23 to 0.7.26 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2364
* chore(deps): bump langchain-core from 1.2.23 to 1.2.26 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2365
* chore(deps): bump tzdata from 2025.3 to 2026.1 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2366
* chore(deps): bump cryptography from 46.0.6 to 46.0.7 in /application in the pip group across 1 directory by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2389
* chore(deps-dev): bump @babel/core from 7.24.6 to 7.29.0 in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2309
* chore(deps): bump mermaid from 11.13.0 to 11.14.0 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2387
* chore(deps-dev): bump tailwindcss from 4.2.1 to 4.2.2 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2388
* chore(deps-dev): bump @tailwindcss/postcss from 4.1.16 to 4.2.2 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2386
* chore(deps): bump react-dom and @types/react-dom in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2385
* chore(deps-dev): bump @babel/preset-env from 7.24.6 to 7.29.2 in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2311
* chore(deps-dev): bump eslint-plugin-n from 17.23.1 to 17.24.0 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2384
* chore(deps-dev): bump svgo from 3.3.3 to 4.0.1 in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2322
* Add public threat model document (.github/THREAT_MODEL.md) by @dartpain in https://github.com/arc53/DocsGPT/pull/2391
* chore(deps-dev): bump eslint-plugin-prettier from 5.5.4 to 5.5.5 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2393
* chore(deps): bump lucide-react from 0.562.0 to 1.8.0 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2396
* Pg 4 by @dartpain in https://github.com/arc53/DocsGPT/pull/2390
* chore(deps): bump react-router-dom from 7.13.1 to 7.14.1 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2399
* chore(deps-dev): bump @types/react from 19.2.2 to 19.2.14 in /frontend by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2403
* chore(deps): bump the npm_and_yarn group across 1 directory with 4 updates by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2407
* chore(deps): bump elevenlabs from 2.41.0 to 2.43.0 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2392
* chore(deps): bump fastmcp from 3.2.0 to 3.2.4 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2394
* chore(deps): bump google-genai from 1.69.0 to 1.73.1 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2395
* chore(deps): bump openai from 2.30.0 to 2.31.0 in /application by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2398
* chore(deps): bump class-variance-authority from 0.7.0 to 0.7.1 in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2326
* chore(deps): bump the npm_and_yarn group across 3 directories with 10 updates by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2411
* chore(deps): bump the npm_and_yarn group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2413
* chore(deps): bump styled-components from 6.3.12 to 6.4.0 in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2400
* chore(deps): bump flow-bin from 0.306.0 to 0.309.0 in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2402
* chore(deps): bump dompurify from 3.3.3 to 3.4.0 in /extensions/react-widget in the npm_and_yarn group across 1 directory by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2406
* chore(deps): bump react and @types/react in /extensions/react-widget by @dependabot[bot] in https://github.com/arc53/DocsGPT/pull/2397


**Full Changelog**: https://github.com/arc53/DocsGPT/compare/0.16.1...0.17.0

---

> **Source** [arc53/DocsGPT](https://github.com/arc53/DocsGPT) · `0.17.0` · 2026-04-21 · [upstream release](https://github.com/arc53/DocsGPT/releases/tag/0.17.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
