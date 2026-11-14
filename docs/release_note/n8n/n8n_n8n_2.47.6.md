---
title: "n8n n8n@2.47.6"
project: "n8n"
repo: "n8n-io/n8n"
tag: "n8n@2.47.6"
version: "n8n@2.47.6"
published: "2026-11-13"
type: "release"
lang: "en"
summary: "core: Keep trusted-source cache keys in one Redis cluster slot (#43627) (2d95724) · core: Let agents turn off prompt caching for endpoints that reject the cache fields (#43673) (400fb98)"
---

# n8n n8n@2.47.6

## [2.47.6](https://github.com/n8n-io/n8n/compare/n8n@2.47.5...n8n@2.47.6) (2026-11-13)


### Bug Fixes

* **core:** Keep trusted-source cache keys in one Redis cluster slot ([#43627](https://github.com/n8n-io/n8n/issues/43627)) ([2d95724](https://github.com/n8n-io/n8n/commit/2d95724b7d8f2befcb9891af795f7d9b25941577))
* **core:** Let agents turn off prompt caching for endpoints that reject the cache fields ([#43673](https://github.com/n8n-io/n8n/issues/43673)) ([400fb98](https://github.com/n8n-io/n8n/commit/400fb989ce8e0717218e558e17daa6c3ae931732))
* **core:** Read legacy-format data with the instance key when the stored key differs ([#43725](https://github.com/n8n-io/n8n/issues/43725)) ([188f2a4](https://github.com/n8n-io/n8n/commit/188f2a4e9f239d254efa910a5d5e7de7faf43893))
* **editor:** Make JSON highlight color visible on light theme ([#43689](https://github.com/n8n-io/n8n/issues/43689)) ([83dc3dd](https://github.com/n8n-io/n8n/commit/83dc3dd02eb01e995197b8d12f4ceb60d72a0c2d))
* **Pinecone Vector Store Node:** Search indexes with a document schema through the documents API ([#43650](https://github.com/n8n-io/n8n/issues/43650)) ([14e03f8](https://github.com/n8n-io/n8n/commit/14e03f80250fb19c7c439ce69b59e0d91c91d856))


### Features

* **editor:** Show Gateway credits promotions from the Gateway config ([#43661](https://github.com/n8n-io/n8n/issues/43661)) ([a2f4beb](https://github.com/n8n-io/n8n/commit/a2f4beb7848491e0fcecf7ee4c0c6d564f0fe873))


### Performance Improvements

* **core:** Keep the replaceSpecialChars character map out of the runtime bundle ([#43728](https://github.com/n8n-io/n8n/issues/43728)) ([a6a0cce](https://github.com/n8n-io/n8n/commit/a6a0cce33b998ca2da7d507b0a62a144502ded79))
* **core:** Reduce per-item setup in the expression runtime ([#43438](https://github.com/n8n-io/n8n/issues/43438)) ([3393555](https://github.com/n8n-io/n8n/commit/3393555e9efdc283394314e89eb3125f8d22ba4d))

<!-- This is an auto-generated description by cubic. -->
<a href="https://cubic.dev/pr/n8n-io/n8n/pull/43773?utm_source=github" target="_blank" rel="noopener noreferrer" data-no-image-dialog="true"><picture><source media="(prefers-color-scheme: dark)" srcset="https://www.cubic.dev/buttons/review-in-cubic-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://www.cubic.dev/buttons/review-in-cubic-light.svg"><img alt="View guided diff" src="https://www.cubic.dev/buttons/review-in-cubic-light.svg"></picture></a> <a href="https://www.cubic.dev/action/auto-fix/pr/n8n-io/n8n/43773?returnTo=https%3A%2F%2Fgithub.com%2Fn8n-io%2Fn8n%2Fpull%2F43773&source=description" target="_blank" rel="noopener noreferrer" data-no-image-dialog="true"><picture><source media="(prefers-color-scheme: dark)" srcset="https://www.cubic.dev/buttons/turn-on-auto-fix-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://www.cubic.dev/buttons/turn-on-auto-fix-light.svg"><img alt="Turn on auto-fix" src="https://www.cubic.dev/buttons/turn-on-auto-fix-light.svg"></picture></a>
<!-- End of auto-generated description by cubic. -->

---

> **Source** [n8n-io/n8n](https://github.com/n8n-io/n8n) · `n8n@2.47.6` · 2026-11-13 · [upstream release](https://github.com/n8n-io/n8n/releases/tag/n8n%402.47.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
