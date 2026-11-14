---
title: "meilisearch v1.56.1"
project: "meilisearch"
repo: "meilisearch/meilisearch"
tag: "v1.56.1"
version: "v1.56.1"
published: "2026-11-02"
type: "patch"
lang: "en"
summary: "Meilisearch v1.56.1 introduces important security fixes. Updating from v1.56.0 is recommended for all users."
---

# meilisearch v1.56.1

Meilisearch v1.56.1 introduces important security fixes. Updating from v1.56.0 is recommended for all users.

# 🦋 Fixes

* Fix issue with ranking scores greater than 1 by @dureuill in https://github.com/meilisearch/meilisearch/pull/6703
* Make sure that all nested fields are inserted in field id map by @dureuill in https://github.com/meilisearch/meilisearch/pull/6700

  - Fixes a panic when modifying the list of searchable attributes after an existing document has been updated to insert new nested fields.
  
  - Existing databases encountering this issue can be fixed by adding a new document containing the new nested fields.

  - Fixes #6636 and fixes #6657

# 🔒 Security

- Fix the memory consumption and runtime of long filters by @dureuill in https://github.com/meilisearch/meilisearch/pull/6695
- Bump rustls from 0.23.45 to 0.23.46 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6706

# 🔩 Miscellaneous

- Clamp map_size to page size when removing tasks during snapshot creation by @mavrodikomsd-eng in https://github.com/meilisearch/meilisearch/pull/6699
- Reduce the number of cargo flaky iterations to 60 by @dureuill in https://github.com/meilisearch/meilisearch/pull/6689
- Fix Debian CI by @curquiza in https://github.com/meilisearch/meilisearch/pull/6698
- Bump mislav/bump-homebrew-formula-action from 3.6 to 4.2 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6567
- Bump actions/setup-node from 6.5.0 to 7.1.0 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6569
- Bump actions/setup-python from 6.3.0 to 7.1.0 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6570
* Bump actions/checkout from 5.1.0 to 7.0.1 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6568


## New Contributors
* @mavrodikomsd-eng made their first contribution in https://github.com/meilisearch/meilisearch/pull/6699

**Full Changelog**: https://github.com/meilisearch/meilisearch/compare/v1.56.0...v1.56.1

---

> **Source** [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) · `v1.56.1` · 2026-11-02 · [upstream release](https://github.com/meilisearch/meilisearch/releases/tag/v1.56.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
