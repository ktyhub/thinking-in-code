---
title: "anthropic-sdk-python v2.7.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.7.0"
version: "v2.7.0"
published: "2026-11-09"
type: "minor"
lang: "en"
summary: "api: accept user_profile.program_status_updated on organization webhook endpoints · api: add claude-fable-5-2 and claude-mythos-5-2 · api: add parent organization filtering and grouping to the usage and cost reports"
---

# anthropic-sdk-python v2.7.0

### Features

* **api:** accept user_profile.program_status_updated on organization webhook endpoints
* **api:** add claude-fable-5-2 and claude-mythos-5-2
* **api:** add parent organization filtering and grouping to the usage and cost reports
* **api:** add the sandbox_egress_restricted error to Admin API write methods
* **api:** add the user_profile.program_status_updated webhook event


### Bug Fixes

* **bedrock,vertex:** add the parse and count_tokens methods missing from beta.messages.with_raw_response and with_streaming_response
* **bedrock,vertex:** send the X-Stainless-Async header and stream raw requests that name no stream class
* **bedrock:** sign requests that have no Connection header instead of raising KeyError
* **bedrock:** write a list in a query as a[]=1&a[]=2 on the Bedrock Mantle clients, as Anthropic does
* **client:** allow API errors to be unpickled and copied
* **client:** read ANTHROPIC_CUSTOM_HEADERS on the Bedrock, Bedrock Mantle and Vertex clients
* **foundry:** stop copy, with_options and with_middleware from raising when ANTHROPIC_FOUNDRY_RESOURCE is set
* **parse:** keep const in structured output schemas, and drop type beside const and enum


### Chores

* **api:** remove some error detail types and update descriptions
* **docs:** say when a work heartbeat does not compare its value
* **internal:** add this repository's review rules
* **internal:** remove two comments from the error classes

---

> **Source** [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · `v2.7.0` · 2026-11-09 · [upstream release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
