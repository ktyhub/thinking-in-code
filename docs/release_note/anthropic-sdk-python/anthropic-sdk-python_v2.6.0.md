---
title: "anthropic-sdk-python v2.6.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.6.0"
version: "v2.6.0"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "api: add error code for ramp limit errors · api: add error codes for External Key validation failures · api: add support for signing organization members out everywhere"
---

# anthropic-sdk-python v2.6.0

### Features

* **api:** add error code for ramp limit errors
* **api:** add error codes for External Key validation failures
* **api:** add support for signing organization members out everywhere


### Bug Fixes

* **bedrock,vertex:** raise error-code and status exception classes on platform clients
* **bedrock:** keep a custom http_client and aws_profile on copies made with copy and with_options


### Chores

* **client:** stop recording sampling parameters on OpenTelemetry spans
* **docs:** describe the type and message of API errors
* **internal:** define the status error mapping once on the base client
* **internal:** tell contributors when a runtime type check belongs
* **tests:** remove ambient ANTHROPIC_ and AWS_ variables before the tests run


### Documentation

* **client:** describe the type, message, code and details of API errors
* **client:** list each method's errors without their descriptions

---

> **Source** [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · `v2.6.0` · 2026-11-05 · [upstream release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
