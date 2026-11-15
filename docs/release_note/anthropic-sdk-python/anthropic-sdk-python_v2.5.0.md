---
title: "anthropic-sdk-python v2.5.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.5.0"
version: "v2.5.0"
published: "2026-11-04"
type: "minor"
lang: "en"
summary: "api: add error details types and new error type values · api: add ids filter to list workspaces · client: add error classes for HTTP statuses and API error codes, and error_code, details and api_message on APIStatusError"
---

# anthropic-sdk-python v2.5.0

### Features

* **api:** add error details types and new error type values
* **api:** add ids filter to list workspaces
* **client:** add error classes for HTTP statuses and API error codes, and error_code, details and api_message on APIStatusError


### Bug Fixes

* **api:** capitalize CMEK in error details type names
* **api:** move some error details types to the resource they describe
* **bedrock:** raise a ValueError when model is "." or ".." instead of sending the request to a different path
* **bedrock:** raise a ValueError when model is empty instead of sending the request to `/model//invoke`
* **client:** make OverloadedError and ServiceUnavailableError subclasses of InternalServerError
* **client:** make the first parse of each response model thread-safe
* **client:** reject path parameters such as '..;x' and ';x'
* **client:** validate unions correctly across threads on pydantic v1
* **tools:** keep the memory tool from renaming or deleting the /memories directory
* **vertex:** percent-encode the model, project ID and region in the request path


### Chores

* **api:** update example values for pattern-constrained string fields
* **ci:** also run the tests with deferred pydantic model builds
* **docs:** clarify plugin reach values
* **docs:** clarify plugin version description and plugin reach
* **docs:** clarify plugin version description length
* **docs:** clarify some API field descriptions
* **docs:** clarify three error descriptions
* **docs:** clarify which blocks to send back around a fallback block
* **docs:** correct Claude Tag direct message notes in usage reports
* **docs:** reword Dream and RBAC role permission descriptions
* **docs:** update the telemetry destination headers description
* **docs:** use the Claude Platform name in analytics filter docs
* **internal:** accept changelog entry files in the changelog check
* **internal:** move error body helpers into the internal utils
* **internal:** remove stale TODO comments and a test that could not pass
* **tests:** check that a None path param is rejected


### Documentation

* **api:** show each field's own description for `speed`
* clean up escapes and code spans in doc comments

---

> **Source** [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · `v2.5.0` · 2026-11-04 · [upstream release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
