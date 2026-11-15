---
title: "anthropic-sdk-python v2.2.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.2.0"
version: "v2.2.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "api: add support for message threads · api: add usage and cost reports by dimension, mark older reports legacy"
---

# anthropic-sdk-python v2.2.0

### Features

* **api:** add support for message threads
* **api:** add usage and cost reports by dimension, mark older reports legacy


### Bug Fixes

* **client:** stop suggesting math.inf in the max_retries error message
* **tools:** leave the tool runner's history to the caller after `append_messages()`, and keep the current reply out of the `set_messages_params()` callback
* **tools:** keep running the tool runner's function tools when `set_messages_params()` gives `tools` as definitions, and stop running one it takes out of `tools`
* **tools:** give the `set_messages_params()` callback of a tool runner its `tools` as definitions again
* **tools:** keep a tool runner's `betas`, `user_profile_id` and `workspace_id` when `set_messages_params()` leaves them out


### Chores

* **deps:** bump certifi in the dev lockfile
* **docs:** clarify plugin content scan and validation descriptions
* **docs:** clarify plugin served_version_pinned and updated_at
* **docs:** fix usage and cost report examples and ending_at docs
* **docs:** rate limit model lists vary by organization and workspace

---

> **Source** [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · `v2.2.0` · 2026-10-23 · [upstream release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
