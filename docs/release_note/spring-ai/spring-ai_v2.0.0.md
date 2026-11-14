---
title: "spring-ai v2.0.0"
project: "spring-ai"
repo: "spring-projects/spring-ai"
tag: "v2.0.0"
version: "v2.0.0"
published: "2026-06-12"
type: "major"
lang: "en"
summary: "For upgrading from 1.1.x to 2.0.0, please refer to the upgrade notes here."
---

# spring-ai v2.0.0

For upgrading from 1.1.x to 2.0.0, please refer to the upgrade notes [here](https://docs.spring.io/spring-ai/reference/upgrade-notes.html#upgrading-to-2-0-0). 

For the detailed reference documentation on 2.0.0, please refer [here](https://docs.spring.io/spring-ai/reference/index.html)

## :star: New Features

- Update Google GenAI models [#6406](https://github.com/spring-projects/spring-ai/issues/6406)
- Use only Jackson 2 in `OpenAiChatModel` [#6392](https://github.com/spring-projects/spring-ai/pull/6392)
- Make `org.springframework.ai.image.observation` null-marked [#6388](https://github.com/spring-projects/spring-ai/issues/6388)
- Polish `Prompt` [#6387](https://github.com/spring-projects/spring-ai/issues/6387)
- Preserve OpenAI tool call additional properties [#6365](https://github.com/spring-projects/spring-ai/pull/6365)

## :lady_beetle: Bug Fixes

- Filter unsupported tool messages in `CassandraChatMemoryRepository` [#6400](https://github.com/spring-projects/spring-ai/pull/6400)
- Filter unsupported tool messages in `MongoChatMemoryRepository` [#6399](https://github.com/spring-projects/spring-ai/pull/6399)
- Filter unsupported tool messages in `JdbcChatMemoryRepository` [#6398](https://github.com/spring-projects/spring-ai/pull/6398)
- Remove `streamToolCallResponses` from advisor builders [#6391](https://github.com/spring-projects/spring-ai/pull/6391)
- Add missing `promptCacheKey` parameter in `OpenAiChatOptions` [#6380](https://github.com/spring-projects/spring-ai/pull/6380)

## :notebook_with_decorative_cover: Documentation

- Update reference docs to reflect 2.0 API changes [#6405](https://github.com/spring-projects/spring-ai/pull/6405)
- Add more guides [#6401](https://github.com/spring-projects/spring-ai/issues/6401)
- Introduce `CLAUDE.md` and `AGENTS.md`  [#6376](https://github.com/spring-projects/spring-ai/issues/6376)
- Consolidate upgrade notes for 2.0.0 [#6333](https://github.com/spring-projects/spring-ai/pull/6333)

## :hammer: Dependency Upgrades

- Upgrade to MCP SDK 2.0.0 [#6385](https://github.com/spring-projects/spring-ai/issues/6385)
- Upgrade to Spring Boot 4.1.0 [#6329](https://github.com/spring-projects/spring-ai/issues/6329)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@ericbottard, @guanxuc, @ilayaperumalg, @sdeleuze, @sdudzin, @tzolov, and @ultramancode

---

> **Source** [spring-projects/spring-ai](https://github.com/spring-projects/spring-ai) · `v2.0.0` · 2026-06-12 · [upstream release](https://github.com/spring-projects/spring-ai/releases/tag/v2.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
