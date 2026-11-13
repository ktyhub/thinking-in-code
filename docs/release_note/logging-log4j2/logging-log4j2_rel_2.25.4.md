---
title: "logging-log4j2 rel/2.25.4"
project: "logging-log4j2"
repo: "apache/logging-log4j2"
tag: "rel/2.25.4"
published: "2026-03-28"
type: "release"
lang: "en"
summary: "This patch release delivers fixes for configuration inconsistencies and formatting issues across several layouts."
---

# logging-log4j2 rel/2.25.4

This patch release delivers fixes for configuration inconsistencies and formatting issues across several layouts.

* Restores alignment between documented and actual configuration attributes.
* Fixes formatting and sanitization issues in XML and RFC5424 layouts.
* Improves handling of invalid characters and non-standard values.

The authoritative list of recognized configuration attributes is available in the [PluginReference](https://logging.apache.org/log4j/2.x/plugin-reference.html).

### Fixed

* Don't issue warnings if extra argument in parameterized logging is `null`. (#3975, #4014)
* Restore support for documented `Rfc5424Layout` parameter names. (#4022, #4074)
* Take `Throwable#toString()` into account while rendering stack traces in Pattern Layout. (#3623, #4033)
* Added debug level logs for successful resource loading in `Loader` class. (#4058, #4060)
* Align `SslConfiguration` factory method usage with Log4j 2.12+ API. The `verifyHostname` attribute is now correctly recognized. (#4061, #4075)
* Fix sanitization of structured data parameter names in RFC5424 layout. (#4073)
* Replace invalid characters in XmlLayout output with the Unicode replacement character (U+FFFD). (#4077)
* Replace invalid characters in Log4j1XmlLayout output with the Unicode replacement character (U+FFFD). (#4078)
* Replace invalid characters in MapMessage.asXml() output with the Unicode replacement character (U+FFFD). (#4079)
* Write non-finite floating-point numbers as strings in `JsonWriter`. (#4080)

---

> **Source** [apache/logging-log4j2](https://github.com/apache/logging-log4j2) · `rel/2.25.4` · 2026-03-28 · [upstream release](https://github.com/apache/logging-log4j2/releases/tag/rel/2.25.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
