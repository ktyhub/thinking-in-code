---
title: "outlines 1.2.13"
project: "outlines"
repo: "dottxt-ai/outlines"
tag: "1.2.13"
version: "1.2.13"
published: "2026-05-04"
type: "patch"
lang: "en"
---

# outlines 1.2.13

## What's Changed
* Fix XDG_CACHE_HOME double .cache in path construction by @jnMetaCode in https://github.com/dottxt-ai/outlines/pull/1828
* fix(llamacpp): correct EOS attention mask and vocab truncation bugs by @giulio-leone in https://github.com/dottxt-ai/outlines/pull/1820
* fix(dsl): add JSON double-quotes to string literals inside container types by @giulio-leone in https://github.com/dottxt-ai/outlines/pull/1821
* fix: accumulate duplicate token IDs in vocabulary construction by @RoloPineda in https://github.com/dottxt-ai/outlines/pull/1831
* fix: inline SPIECE_UNDERLINE fallback for transformers compat by @giulio-leone in https://github.com/dottxt-ai/outlines/pull/1832
* fix: preserve all token IDs when multiple BPE tokens decode to same string by @alvinttang in https://github.com/dottxt-ai/outlines/pull/1833
* Fix documentation preview action + update uv.lock by @RobinPicard in https://github.com/dottxt-ai/outlines/pull/1838
* Update the Dottxt model by @RobinPicard in https://github.com/dottxt-ai/outlines/pull/1845
* Pin the version of dottxt to >=0.2 in the pyproject by @RobinPicard in https://github.com/dottxt-ai/outlines/pull/1857
* Refactor _check_chat_template method to improve tokenizer compatibility checks by @Ki-Seki in https://github.com/dottxt-ai/outlines/pull/1855
* Handle both HF tokenizer and mlx tokenizer wrapper for the MLXLM model by @RobinPicard in https://github.com/dottxt-ai/outlines/pull/1848

## New Contributors
* @jnMetaCode made their first contribution in https://github.com/dottxt-ai/outlines/pull/1828
* @giulio-leone made their first contribution in https://github.com/dottxt-ai/outlines/pull/1820
* @RoloPineda made their first contribution in https://github.com/dottxt-ai/outlines/pull/1831
* @alvinttang made their first contribution in https://github.com/dottxt-ai/outlines/pull/1833

**Full Changelog**: https://github.com/dottxt-ai/outlines/compare/1.2.12...1.2.13

---

> **Source** [dottxt-ai/outlines](https://github.com/dottxt-ai/outlines) · `1.2.13` · 2026-05-04 · [upstream release](https://github.com/dottxt-ai/outlines/releases/tag/1.2.13)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
