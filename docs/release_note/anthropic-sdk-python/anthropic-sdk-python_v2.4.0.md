---
title: "anthropic-sdk-python v2.4.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.4.0"
version: "v2.4.0"
published: "2026-11-02"
type: "minor"
lang: "en"
summary: "api: add GA methods for analytics, spend limits and RBAC · api: add named beta types for unified metrics and RBAC delete responses · api: add shared analytics order and increase request actor types"
---

# anthropic-sdk-python v2.4.0

### Features

* **api:** add GA methods for analytics, spend limits and RBAC
* **api:** add named beta types for unified metrics and RBAC delete responses
* **api:** add shared analytics order and increase request actor types
* **api:** add tool_use_limit_reached_error and compaction_limit_reached_error session error types
* **api:** add types for analytics group_by and spend limit period filters
* **api:** add user_profile_id to External Keys and Workspaces


### Bug Fixes

* **api:** make spend_limit nullable in the spend limit increase request approve response
* **api:** require always-sent analytics fields and drop the unused project product field
* **client:** let pydantic validate params types that accept omit


### Chores

* **ci:** remove unused build upload steps
* **docs:** clarify the Slack channel id description
* **docs:** clarify what disabling the Compliance API stops
* **docs:** clarify what the capability_access_all role action grants
* **docs:** link Dreams model fields to the supported models section
* **docs:** update example user ID in Admin API examples
* **internal:** add a section for each repository's own review rules
* **internal:** plainer wording in worker comments

### Documentation

* **client:** add missing await to the async parse() docstring example
* **examples:** keep the message threads example valid on Sonnet 5.5
* **examples:** use current model IDs
* **readme:** point to the docs site for documentation
* link to the SDK documentation instead of removed README sections

---

> **Source** [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · `v2.4.0` · 2026-11-02 · [upstream release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
