---
title: "llama_index v0.14.24"
project: "llama_index"
repo: "run-llama/llama_index"
tag: "v0.14.24"
version: "v0.14.24"
published: "2026-08-19"
type: "patch"
lang: "en"
---

# llama_index v0.14.24

# Release Notes

## [2026-08-19]

### llama-index-core [0.14.24]

- fix: close HotpotQA evaluator file handles ([#22113](https://github.com/run-llama/llama_index/pull/22113))
- fix(core): preserve oversized leaf nodes in CodeSplitter ([#22119](https://github.com/run-llama/llama_index/pull/22119))
- fix: preserve multiblock chat history writes ([#22124](https://github.com/run-llama/llama_index/pull/22124))
- fix(core): skip empty nodes in HTMLNodeParser ([#22125](https://github.com/run-llama/llama_index/pull/22125))
- fix(core): respect mmr_threshold=0 in MMR embedding search ([#22126](https://github.com/run-llama/llama_index/pull/22126))
- fix: keep all nodes per document in IngestionPipeline upserts (re-submit of #22046, not a dup of #21456) ([#22133](https://github.com/run-llama/llama_index/pull/22133))
- fix: don't mark \*args/\*\*kwargs as required tool parameters ([#22135](https://github.com/run-llama/llama_index/pull/22135))
- fix(core): default MetadataFilters condition to AND when None ([#22155](https://github.com/run-llama/llama_index/pull/22155))
- fix: honor agent structured_output_fn/output_cls inside AgentWorkflow ([#22162](https://github.com/run-llama/llama_index/pull/22162))
- fix(core): use word tokenization for stopword removal in SemanticDoubleMergingSplitterNodeParser ([#22167](https://github.com/run-llama/llama_index/pull/22167))
- fix(core): restore prompt helper fallback to supplied LLM metadata ([#22177](https://github.com/run-llama/llama_index/pull/22177))
- populate response text on streaming chat response when writing to memory ([#22179](https://github.com/run-llama/llama_index/pull/22179))
- feat(property_graph): add raise_on_error to LLM path extractors ([#22195](https://github.com/run-llama/llama_index/pull/22195))
- Clarify FactExtractionMemoryBlock condense prompt to return a full snapshot ([#22213](https://github.com/run-llama/llama_index/pull/22213))
- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))
- fix(core): give each CitationQueryEngine citation node its own id and offsets ([#22537](https://github.com/run-llama/llama_index/pull/22537))
- fix(core): persist SimpleChatStore without escaping non-ascii ([#22538](https://github.com/run-llama/llama_index/pull/22538))
- feat(core): allow Memory to accept any AsyncDBChatStore ([#22541](https://github.com/run-llama/llama_index/pull/22541))
- test(node_parser): enable pytest discovery for sentence_window tests ([#22545](https://github.com/run-llama/llama_index/pull/22545))
- Implement async for LLMRerank ([#22597](https://github.com/run-llama/llama_index/pull/22597))

### llama-index-embeddings-bedrock [0.8.3]

- fix: make aioboto3 optional in llama-index-embeddings-bedrock ([#21915](https://github.com/run-llama/llama_index/pull/21915))
- fix(embeddings): validate non-empty Bedrock embedding payload before AWS call ([#22527](https://github.com/run-llama/llama_index/pull/22527))

### llama-index-embeddings-voyageai [0.6.1]

- fix: set chunk_size=32000 and fix input format for contextualizedembeddings ([#22144](https://github.com/run-llama/llama_index/pull/22144))

### llama-index-graph-stores-falkordb [0.6.0]

- fix(falkordb): correct schema, vector ranking, filters and batching in property graph store ([#22522](https://github.com/run-llama/llama_index/pull/22522))

### llama-index-indices-managed-dashscope [0.5.1]

- fix(dashscope): send query_history in retriever payload ([#22212](https://github.com/run-llama/llama_index/pull/22212))

### llama-index-indices-managed-lancedb [0.3.2]

- fix(lancedb): repair image ingestion crash, embedding_model typo, and… ([#22544](https://github.com/run-llama/llama_index/pull/22544))
- lint ([#22572](https://github.com/run-llama/llama_index/pull/22572))

### llama-index-llms-anthropic [0.11.10]

- feat(anthropic): Add support for Claude Sonnet 5 ([#22202](https://github.com/run-llama/llama_index/pull/22202))
- Fix/sonnet 5 function calling ([#22217](https://github.com/run-llama/llama_index/pull/22217))
- feat(anthropic, bedrock-converse): add Claude Opus 5 to model allowlists ([#22451](https://github.com/run-llama/llama_index/pull/22451))
- fix(anthropic): correct Opus 4.6 context window to 1M ([#22555](https://github.com/run-llama/llama_index/pull/22555))

### llama-index-llms-bedrock-converse [0.14.18]

- fix: make aioboto3 optional in llama-index-llms-bedrock-converse ([#21916](https://github.com/run-llama/llama_index/pull/21916))
- feat(bedrock-converse): Add support for Claude Sonnet 5 ([#22201](https://github.com/run-llama/llama_index/pull/22201))
- feat(anthropic, bedrock-converse): add Claude Opus 5 to model allowlists ([#22451](https://github.com/run-llama/llama_index/pull/22451))
- feat(bedrock-converse): Support thinking type 'disabled' ([#22534](https://github.com/run-llama/llama_index/pull/22534))

### llama-index-llms-google-genai [0.10.0]

- fix: dont overwrite thought signatures ([#21562](https://github.com/run-llama/llama_index/pull/21562))
- fix(google-genai): don't send default params in gemini genconfig ([#22270](https://github.com/run-llama/llama_index/pull/22270))
- feat(google-genai): use gemini 3.7 Flash by default in lib and docs ([#22734](https://github.com/run-llama/llama_index/pull/22734))

### llama-index-llms-llama-cpp [0.6.1]

- fix(llama-cpp): report the model's effective context window ([#22539](https://github.com/run-llama/llama_index/pull/22539))

### llama-index-llms-openai [0.7.10]

- Add GPT-5.6 models to supported OpenAI models ([#22385](https://github.com/run-llama/llama_index/pull/22385))

### llama-index-node-parser-slide [0.3.0]

- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))

### llama-index-observability-otel [0.6.4]

- chore: bump instrumentation version in otel integration to 0.5.0 as minimum ([#22151](https://github.com/run-llama/llama_index/pull/22151))
- fix: improve otel span ID handling ([#22485](https://github.com/run-llama/llama_index/pull/22485))

### llama-index-protocols-ag-ui [0.4.0]

- fix(ag-ui): raise ValueError instead of fabricating tool_call_id ([#22103](https://github.com/run-llama/llama_index/pull/22103))
- fix: persist AG-UI frontend tool messages ([#22109](https://github.com/run-llama/llama_index/pull/22109))
- Isolate AG-UI initial state copies ([#22189](https://github.com/run-llama/llama_index/pull/22189))
- feat(ag-ui): support multimodal user input (images, audio, video, documents) ([#22678](https://github.com/run-llama/llama_index/pull/22678))

### llama-index-readers-alibabacloud-aisearch [0.4.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-readers-couchbase [0.5.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-readers-file [0.6.0]

- fix: bound HWP section decompression ([#22106](https://github.com/run-llama/llama_index/pull/22106))

### llama-index-readers-gcs [0.6.1]

- docs: fix GCS reader README import paths ([#22139](https://github.com/run-llama/llama_index/pull/22139))

### llama-index-readers-github [0.11.2]

- fix(github-reader): add asyncio_mode=auto to unblock async tests in CI ([#21937](https://github.com/run-llama/llama_index/pull/21937))

### llama-index-readers-google [0.7.3]

- fix: GoogleDriveReader returns None instead of a list when an error is swallowed ([#22556](https://github.com/run-llama/llama_index/pull/22556))

### llama-index-readers-huggingface-fs [0.5.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-readers-hwp [0.5.0]

- fix: bound HWP section decompression ([#22106](https://github.com/run-llama/llama_index/pull/22106))

### llama-index-readers-memos [0.5.1]

- Fix MemosReader default endpoint and metadata ([#22199](https://github.com/run-llama/llama_index/pull/22199))

### llama-index-readers-minio [0.5.1]

- fix: don't hardcode verify=False for S3 TLS in BotoMinioReader ([#22530](https://github.com/run-llama/llama_index/pull/22530))

### llama-index-readers-sec-filings [0.5.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-readers-stripe-docs [0.5.1]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-retrievers-galaxia [0.2.2]

- fix: close file handles and http connections in reader integrations ([#22529](https://github.com/run-llama/llama_index/pull/22529))

### llama-index-retrievers-pathway [0.5.0]

- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))

### llama-index-storage-docstore-couchbase [0.4.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-storage-index-store-couchbase [0.4.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-storage-kvstore-couchbase [0.4.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-tools-desearch [0.1.1]

- docs: remove leftover generation text from desearch tool README ([#22149](https://github.com/run-llama/llama_index/pull/22149))

### llama-index-tools-mcp [0.5.0]

- feat: migrate llama-index-tools-mcp to mcp 2.x ([#22557](https://github.com/run-llama/llama_index/pull/22557))

### llama-index-tools-typecast [0.1.0]

- Document Typecast unsynthesizable text errors ([#22514](https://github.com/run-llama/llama_index/pull/22514))

### llama-index-tools-vectara-query [0.5.0]

- fix a few typos ([#22512](https://github.com/run-llama/llama_index/pull/22512))

### llama-index-vector-stores-azureaisearch [0.5.1]

- fix(azureaisearch): preserve falsy metadata values when indexing nodes ([#22154](https://github.com/run-llama/llama_index/pull/22154))

### llama-index-vector-stores-couchbase [0.7.1]

- Add telemetry ([#22473](https://github.com/run-llama/llama_index/pull/22473))

### llama-index-vector-stores-pinecone [0.8.1]

- fix(pinecone): support pinecone client v8 and v9 ([#22511](https://github.com/run-llama/llama_index/pull/22511))

### llama-index-vector-stores-qdrant [0.10.3]

- fix(qdrant): aquery() drops falsy shard_identifier values (e.g. 0) ([#22169](https://github.com/run-llama/llama_index/pull/22169))
- fix(qdrant): restore compatibility with qdrant-client 1.19.0 ([#22630](https://github.com/run-llama/llama_index/pull/22630))

### llama-index-vector-stores-vertexaivectorsearch [0.5.0]

- feat(vector-stores/vertexai): Expand support of V2 API for `VertexAIVectorStore` ([#22085](https://github.com/run-llama/llama_index/pull/22085))

### llama-index-vector-stores-weaviate [1.6.2]

- fix(weaviate): return real properties as node metadata for pre-existing collections ([#22540](https://github.com/run-llama/llama_index/pull/22540))

---

> **Source** [run-llama/llama_index](https://github.com/run-llama/llama_index) · `v0.14.24` · 2026-08-19 · [upstream release](https://github.com/run-llama/llama_index/releases/tag/v0.14.24)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
