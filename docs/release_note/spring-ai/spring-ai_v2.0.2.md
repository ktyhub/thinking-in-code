---
title: "spring-ai v2.0.2"
project: "spring-ai"
repo: "spring-projects/spring-ai"
tag: "v2.0.2"
version: "v2.0.2"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "For upgrading from 2.0.1 to 2.0.2, please refer to the upgrade notes here."
---

# spring-ai v2.0.2

For upgrading from 2.0.1 to 2.0.2, please refer to the upgrade notes [here](https://docs.spring.io/spring-ai/reference/upgrade-notes.html#upgrading-to-2-0-2).

## :star: New Features

- Upgrade the Anthropic Java SDK to 2.72.0 [#7164](https://github.com/spring-projects/spring-ai/pull/7164)
- Add observability support for `TextToSpeechModel`, `TranscriptionModel` and `StabilityAiImageModel` [#7141](https://github.com/spring-projects/spring-ai/pull/7141)
- Configure Redis vector store metadata fields [#6870](https://github.com/spring-projects/spring-ai/pull/6870)
- Add customizers for stateless MCP servers [#6539](https://github.com/spring-projects/spring-ai/pull/6539)

## :lady_beetle: Bug Fixes

- Fix numeric filters in Cassandra vector store [#7117](https://github.com/spring-projects/spring-ai/pull/7117)
- Fix StructuredOutputValidationAdvisor repeating tool call requests [#7100](https://github.com/spring-projects/spring-ai/pull/7100)
- Handle Ollama responses without a message [#7066](https://github.com/spring-projects/spring-ai/pull/7066)
- Return final answer first in `AnthropicChatModel` [#7001](https://github.com/spring-projects/spring-ai/pull/7001)
- Honor disabled reasoning in tool history [#6984](https://github.com/spring-projects/spring-ai/pull/6984)
- Include thinking text in Anthropic streaming chunks [#6982](https://github.com/spring-projects/spring-ai/pull/6982)
- Fix Neo4j chat memory index properties [#6967](https://github.com/spring-projects/spring-ai/pull/6967)
- Fix invalid JSON in Bedrock tool-call arguments [#6963](https://github.com/spring-projects/spring-ai/pull/6963)
- Backfill `additionalProperties: false` in OpenAI strict tool schemas [#6865](https://github.com/spring-projects/spring-ai/pull/6865)
- Restore honoring the configured OpenAI timeout [#6837](https://github.com/spring-projects/spring-ai/pull/6837)
- Fix `JsoupDocumentReader` dropping relative link URLs [#6803](https://github.com/spring-projects/spring-ai/pull/6803)
- Close the resource stream in `TextReader` [#6797](https://github.com/spring-projects/spring-ai/pull/6797)
- Fix tool call extraction in GoogleGenAiChatModel for mixed content responses [#5468](https://github.com/spring-projects/spring-ai/pull/5468)

## :notebook_with_decorative_cover: Documentation

- Document Anthropic server-side spans in traces [#7165](https://github.com/spring-projects/spring-ai/pull/7165)
- Correct stale API names in AI metadata docs [#7032](https://github.com/spring-projects/spring-ai/pull/7032)
- docs: document OpenAI reasoning effort property [#6943](https://github.com/spring-projects/spring-ai/pull/6943)
- Document MCP client scope and session boundaries [#6820](https://github.com/spring-projects/spring-ai/pull/6820)

## :hammer: Dependency Upgrades

- Upgrade OpenAI Java SDK to 4.80.0 [#7170](https://github.com/spring-projects/spring-ai/issues/7170)
- Upgrade AWS SDK and Bedrock runtime to 2.55.14 [#7169](https://github.com/spring-projects/spring-ai/issues/7169)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@CodeTrainerMan, @CryoThrust, @JamesBLewis, @Lubaoshuai, @Rainmemery, @ashakirin, @chabinhwang, @chengwudi1, @chensishang, @dimitarproynov, @dlwldn30, @flex-ilsub, @herder, @ikaitist, @iuliiasobolevska, @jhpark1227, @jianran, @kezhenxu94, @lazer-dev, @martin-grofcik, @nicolaskrier, @pengjonas, @pengmoubuaixuexi, @rvullriede, @ryujungkyun, @seo92js, @sharanrenukeshbharmshetty, @sobychacko, @tzolov, @vinayreddykalluri, @wantaekchoi, @xujiantop-crypto, and @zxuhan

---

> **Source** [spring-projects/spring-ai](https://github.com/spring-projects/spring-ai) · `v2.0.2` · 2026-10-23 · [upstream release](https://github.com/spring-projects/spring-ai/releases/tag/v2.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
