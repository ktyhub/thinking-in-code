---
title: "spring-ai v2.0.1"
project: "spring-ai"
repo: "spring-projects/spring-ai"
tag: "v2.0.1"
version: "v2.0.1"
published: "2026-08-21"
type: "patch"
lang: "en"
summary: "For upgrading from 2.0.0 to 2.0.1, please refer to the upgrade notes here."
---

# spring-ai v2.0.1

For upgrading from 2.0.0 to 2.0.1, please refer to the upgrade notes [here](https://docs.spring.io/spring-ai/reference/upgrade-notes.html#upgrading-to-2-0-1).

For the detailed reference documentation on 2.0.1, please refer [here](https://docs.spring.io/spring-ai/reference/index.html)

## :star: New Features

- Harden Ollama integration tests against flakiness [#6776](https://github.com/spring-projects/spring-ai/pull/6776)
- Retire deprecated Mistral AI chat models [#6772](https://github.com/spring-projects/spring-ai/pull/6772)
- Document additional 2.0.1 breaking changes [#6771](https://github.com/spring-projects/spring-ai/pull/6771)
- Support audio streaming in OpenAiAudioSpeechModel [#6733](https://github.com/spring-projects/spring-ai/pull/6733)
- Add configurable tool call limits [#6726](https://github.com/spring-projects/spring-ai/pull/6726)
- Enrich OpenAI transcription options and responses [#6697](https://github.com/spring-projects/spring-ai/pull/6697)
- Update Couchbase vector store to use Spring Boot-managed client [#6583](https://github.com/spring-projects/spring-ai/issues/6583)
- Remove explicit `protobuf-java` version properties [#6552](https://github.com/spring-projects/spring-ai/issues/6552)
- Add ToolChoice support for Google GenAI chat model [#6531](https://github.com/spring-projects/spring-ai/pull/6531)
- Remove fastjson2 dependency from `spring-ai-azure-store` [#6508](https://github.com/spring-projects/spring-ai/pull/6508)
- Refactor `Media` builder to use typed `data` overloads [#6481](https://github.com/spring-projects/spring-ai/pull/6481)
- Validate `TokenTextSplitter` builder arguments [#6452](https://github.com/spring-projects/spring-ai/pull/6452)
- Support page ranges in `PagePdfDocumentReader` [#6445](https://github.com/spring-projects/spring-ai/pull/6445)
- Revise DeepSeekApi [#6428](https://github.com/spring-projects/spring-ai/pull/6428)
- GraalVM for mcp annotations doesn't work in Spring AI 2.0.0 [#6427](https://github.com/spring-projects/spring-ai/issues/6427)
- Rename `spring-ai-autoconfigure-model-chat-memory-redis` [#6416](https://github.com/spring-projects/spring-ai/pull/6416)
- Restore PDF media mapping in `OpenAiChatModel` [#6410](https://github.com/spring-projects/spring-ai/pull/6410)
- Google Image generation support [#6408](https://github.com/spring-projects/spring-ai/pull/6408)
- Remove unused field `maxResults` [#6344](https://github.com/spring-projects/spring-ai/pull/6344)
- Confusing WARN log while AWS region resolving [#5108](https://github.com/spring-projects/spring-ai/issues/5108)
- SpringAI does not follow the AWS SDK's default region resolution rules [#823](https://github.com/spring-projects/spring-ai/issues/823)

## :lady_beetle: Bug Fixes

- Reserve Redis chat memory timestamps atomically [#6784](https://github.com/spring-projects/spring-ai/pull/6784)
- Fix RedisChatMemoryRepository clear() [#6783](https://github.com/spring-projects/spring-ai/pull/6783)
- Escape metadata values in Redis chat memory queries [#6765](https://github.com/spring-projects/spring-ai/issues/6765)
- Validate resolved resource path [#6764](https://github.com/spring-projects/spring-ai/issues/6764)
- Introduce maxSessions and sessionIdleTimeout [#6760](https://github.com/spring-projects/spring-ai/issues/6760)
- Fix `OpenAiAudioTranscriptionModel` leaking the stream on cancellation [#6759](https://github.com/spring-projects/spring-ai/pull/6759)
- Merge java-compile compilerArgs instead of overriding [#6756](https://github.com/spring-projects/spring-ai/pull/6756)
- Default OpenAI tool-calling strict mode to false [#6755](https://github.com/spring-projects/spring-ai/pull/6755)
- Use temporary directory for cache [#6754](https://github.com/spring-projects/spring-ai/issues/6754)
- Handle malformed pdf in PdfDocumentReader [#6753](https://github.com/spring-projects/spring-ai/issues/6753)
- Make tool resolution fallback configurable [#6751](https://github.com/spring-projects/spring-ai/issues/6751)
- Use full length hash [#6746](https://github.com/spring-projects/spring-ai/issues/6746)
- Correct `ToolContext` parameter detection [#6744](https://github.com/spring-projects/spring-ai/pull/6744)
- Return a single Generation on ToolCallLimitExceededException [#6742](https://github.com/spring-projects/spring-ai/pull/6742)
- Fix ToolCallingAdvisor streaming loop dropping doBeforeStream mutations [#6737](https://github.com/spring-projects/spring-ai/pull/6737)
- Add instructions option to OpenAiAudioSpeechModel [#6731](https://github.com/spring-projects/spring-ai/pull/6731)
- Apply MCP HTTP client request customizer beans [#6716](https://github.com/spring-projects/spring-ai/pull/6716)
- Close OpenAI stream response on cancellation [#6656](https://github.com/spring-projects/spring-ai/pull/6656)
- Validate text length to prevent `StringIndexOutOfBoundsException` for `MarkdownCodeBlockCleaner` [#6645](https://github.com/spring-projects/spring-ai/pull/6645)
- Fix AnthropicChatOptions.timeout(Duration) being ignored outside model construction [#6605](https://github.com/spring-projects/spring-ai/pull/6605)
- Close native resources in `TransformersEmbeddingModel` [#6572](https://github.com/spring-projects/spring-ai/pull/6572)
- Fix `OllamaChatModel` prompt options not inheriting configured model [#6567](https://github.com/spring-projects/spring-ai/pull/6567)
- Use Locale.ROOT for String uppercase/lowercase operations on wire/protocol values [#6566](https://github.com/spring-projects/spring-ai/pull/6566)
- Handle null fields in Mistral AI moderation `Categories` and `CategoryScores` [#6565](https://github.com/spring-projects/spring-ai/issues/6565)
- Fix Azure OpenAI authentication failure behind a TLS-inspecting proxy [#6553](https://github.com/spring-projects/spring-ai/pull/6553)
- Fix `OpenSearchVectorStore` document deserialization [#6550](https://github.com/spring-projects/spring-ai/pull/6550)
- Fix group precedence in `MilvusFilterExpressionConverter` [#6543](https://github.com/spring-projects/spring-ai/pull/6543)
- Fix strict mode payload placement in `OpenAiChatModel` [#6540](https://github.com/spring-projects/spring-ai/pull/6540)
- Align `@McpTool` exception handling with `@Tool` contract [#6534](https://github.com/spring-projects/spring-ai/pull/6534)
- Fix MCP stdio connections without args [#6533](https://github.com/spring-projects/spring-ai/pull/6533)
- Fix Milvus metadata integer values deserialized as Long instead of Double [#6517](https://github.com/spring-projects/spring-ai/pull/6517)
- Fix OpenAI stream handling for empty tool\_calls [#6504](https://github.com/spring-projects/spring-ai/pull/6504)
- Fix shared mutable state in chat options builder `clone()` [#6498](https://github.com/spring-projects/spring-ai/pull/6498)
- Fix tool-search reference extraction for parallel calls [#6497](https://github.com/spring-projects/spring-ai/pull/6497)
- Fix incorrect assertions in `CouchbaseSearchVectorStore.Builder` [#6490](https://github.com/spring-projects/spring-ai/pull/6490)
- Fix shared mutable state in `AnthropicChatOptions.Builder.clone()` [#6487](https://github.com/spring-projects/spring-ai/pull/6487)
- Fix null parent for tool call observations in blocking mode [#6475](https://github.com/spring-projects/spring-ai/pull/6475)
- Fix Milvus filters with custom metadata field [#6470](https://github.com/spring-projects/spring-ai/pull/6470)
- Add tool-search advisor modules to BOM [#6464](https://github.com/spring-projects/spring-ai/pull/6464)
- Use model-independent assertions for tool-call token usage [#6461](https://github.com/spring-projects/spring-ai/pull/6461)
- Fix tool-search advisor auto-config ordering [#6458](https://github.com/spring-projects/spring-ai/pull/6458)
- There is a bug in the openai streaming mode [#6441](https://github.com/spring-projects/spring-ai/issues/6441)
- Validate PgVectorStore table schema after initialization [#6438](https://github.com/spring-projects/spring-ai/pull/6438)
- Accumulate tool calling advisor usage [#6424](https://github.com/spring-projects/spring-ai/pull/6424)
- Fix MarkdownCodeBlockCleaner discarding content of single-line fenced code blocks [#6423](https://github.com/spring-projects/spring-ai/pull/6423)
- Merge streaming tool call deltas by index in `OpenAiChatModel` [#6381](https://github.com/spring-projects/spring-ai/pull/6381)
- `reasoningContent` in metadata is always null when calling DeepSeek model via OpenAI API [#6375](https://github.com/spring-projects/spring-ai/issues/6375)
- Fix genai thinking level validation [#6339](https://github.com/spring-projects/spring-ai/pull/6339)
- Fix Microsoft Foundry URL path mode for proxy hosts [#6180](https://github.com/spring-projects/spring-ai/pull/6180)
- Perform `Optional` unwrapping in `OpenAiChatModel#buildGeneration` [#6009](https://github.com/spring-projects/spring-ai/pull/6009)
- Fix Streamable HTTP WebClient transport to accept SSE frames without `event` field [#5783](https://github.com/spring-projects/spring-ai/pull/5783)

## :notebook_with_decorative_cover: Documentation

- Fix inaccurate Content interface Javadoc [#6704](https://github.com/spring-projects/spring-ai/pull/6704)
- Document conversation ID scoping for chat memory [#6651](https://github.com/spring-projects/spring-ai/pull/6651)
- Fix OpenAI audio documentation title and broken link [#6606](https://github.com/spring-projects/spring-ai/pull/6606)
- Restructure structured-output documentation [#6495](https://github.com/spring-projects/spring-ai/pull/6495)
- Restore the `CosmosDBChatMemoryRepository` section [#6491](https://github.com/spring-projects/spring-ai/issues/6491)
- Fix typos in McpTool JavaDoc comments [#6449](https://github.com/spring-projects/spring-ai/pull/6449)
- Restructure tool calling reference docs [#6432](https://github.com/spring-projects/spring-ai/pull/6432)
- Remove `ToolSearchToolCallingAdvisor` for upgrade notes [#6421](https://github.com/spring-projects/spring-ai/issues/6421)
- Fix dead JavaDoc link in upgrade notes [#6419](https://github.com/spring-projects/spring-ai/pull/6419)
- Update outdated Pinecone free-tier namespace notes [#6383](https://github.com/spring-projects/spring-ai/pull/6383)
- Fix duplicate "is is" typo in `openai-chat.adoc` [#6037](https://github.com/spring-projects/spring-ai/pull/6037)
- Update Ollama OpenAI API compatibility example to use builder pattern [#5999](https://github.com/spring-projects/spring-ai/pull/5999)

## :hammer: Dependency Upgrades

- Delegate Maven plugin versions to Spring Boot BOM [#6586](https://github.com/spring-projects/spring-ai/issues/6586)
- Align gRPC version management with Spring Boot [#6585](https://github.com/spring-projects/spring-ai/issues/6585)
- Upgrade Milvus java client to 2.6.21 [#6503](https://github.com/spring-projects/spring-ai/issues/6503)
- Upgrade pinecone client to 6.2.0 [#6496](https://github.com/spring-projects/spring-ai/issues/6496)
- Upgrade qdrant client to 1.18.0 [#6494](https://github.com/spring-projects/spring-ai/issues/6494)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@DragonFSKY, @EvanYao826, @JamesBLewis, @MKP999, @OneZero-Y, @OreOreDa, @Seol-JY, @TimurRakhmatullin86, @YashRL, @ZhangDT-sky, @angus-guo, @chaechaepower, @chemicL, @dimitarproynov, @ericbottard, @gaoxiaolei-s59, @gh7035, @guanxuc, @hutiefang76, @ilayaperumalg, @iuliiasobolevska, @jewoodev, @kamalcis, @kezhenxu94, @leeworms, @liushenling2001, @nicolaskrier, @prachipanditrao, @pyg410, @quaff, @rea9r, @sdeleuze, @sdudzin, @seeun0210, @sobychacko, @strogiyotec, @subhashpolisetti, @thjanssen, @tzolov, @ultramancode, and @yyyCode

---

> **Source** [spring-projects/spring-ai](https://github.com/spring-projects/spring-ai) · `v2.0.1` · 2026-08-21 · [upstream release](https://github.com/spring-projects/spring-ai/releases/tag/v2.0.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
