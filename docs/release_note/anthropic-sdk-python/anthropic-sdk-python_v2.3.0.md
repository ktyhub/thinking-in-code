---
title: "anthropic-sdk-python v2.3.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.3.0"
version: "v2.3.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "api: add Claude Tag endpoints for Claude Enterprise organizations"
---

# anthropic-sdk-python v2.3.0

### Features

* **api:** add Claude Tag endpoints for Claude Enterprise organizations


### Bug Fixes

* **google-cloud:** send user profiles requests to the organization endpoint


### Chores

* **client:** stop sending query params hardcoded in endpoint paths
* **docs:** improve the descriptions of the code execution tool and its encrypted results
* **docs:** reword work queue, skill and external key descriptions
* **docs:** update descriptions of the per-user usage and cost reports
* **internal:** carry endpoint path query params to the request layer
* **internal:** check the repository by owner and public name in workflows
* **internal:** read the beta route qualifier instead of the beta=true query
* **internal:** remove preview build upload from CI
* **internal:** stop sending the beta query param from parse and stream


### Documentation

* **mcp:** remove the stray `await` from the async `tool_runner` examples
* **google-cloud:** update the product name
* **client:** link the Bedrock and Vertex raw response docstrings to the SDK documentation
* update the README and the example request

---

> **Source** [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · `v2.3.0` · 2026-10-23 · [upstream release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
